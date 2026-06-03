import { buildBooklet } from 'grapdf'
import { PDFDocument } from 'pdf-lib'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string
  const sort = query.sort === 'true'
  const reverse = query.reverse === 'true'
  const limit = query.limit ? parseInt(query.limit as string, 10) : undefined
  const pages = query.pages ? parseInt(query.pages as string, 10) : undefined
  const selector = query.selector ? (query.selector as string) : undefined
  const include = query.include ? (query.include as string) : undefined
  const exclude = query.exclude ? (query.exclude as string) : undefined
  const trim = query.trim ? parseInt(query.trim as string, 10) : undefined

  if (!url) {
    throw createError({ statusCode: 400, message: 'url is required' })
  }

  setHeader(event, 'Content-Type', 'text/event-stream')
  setHeader(event, 'Cache-Control', 'no-cache')
  setHeader(event, 'Connection', 'keep-alive')
  setHeader(event, 'X-Accel-Buffering', 'no')

  const res = event.node.res

  const send = (data: Record<string, unknown>) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
  }

  const plural = (n: number) => (n !== 1 ? 's' : '')

  const onProgress = (stage: string, completed?: number, total?: number) => {
    let message: string
    if (stage === 'scanning') {
      message = 'Scanning for PDF links…'
    } else if (stage === 'downloading') {
      if (completed === 0) {
        message = `Found ${total} PDF${plural(total ?? 0)}, starting download…`
      } else {
        message = `Downloading… ${completed} / ${total}`
      }
    } else if (stage === 'merging') {
      message = `Merging ${total} PDF${plural(total ?? 0)}…`
    } else {
      message = stage
    }
    send({ type: 'progress', message })
  }

  const hostname = new URL(url).hostname.replace(/^www\./, '').replaceAll('.', '-')

  try {
    const { pdfCount, attempted, bytes: rawBytes } = await buildBooklet(url, {
      sort,
      reverse,
      limit,
      selector,
      include,
      exclude,
      trim,
      onProgress
    })

    const failed = attempted - pdfCount
    if (failed > 0) {
      send({ type: 'progress', message: `Warning: ${failed} PDF${plural(failed)} failed to download` })
    }

    let bytes = rawBytes

    if (pages && pages > 0) {
      const srcDoc = await PDFDocument.load(bytes)
      const pageCount = Math.min(pages, srcDoc.getPageCount())
      const newDoc = await PDFDocument.create()
      const indices = Array.from({ length: pageCount }, (_, i) => i)
      const copied = await newDoc.copyPages(srcDoc, indices)
      copied.forEach((p: import('pdf-lib').PDFPage) => newDoc.addPage(p))
      bytes = await newDoc.save()
    }

    send({
      type: 'complete',
      data: Buffer.from(bytes).toString('base64'),
      filename: `${hostname}.pdf`,
      mimeType: 'application/pdf'
    })
  } catch (err) {
    send({ type: 'error', message: err instanceof Error ? err.message : 'Binding failed' })
  }

  res.end()
})
