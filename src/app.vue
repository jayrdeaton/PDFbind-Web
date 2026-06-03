<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-zinc-800 px-6 py-4 flex-shrink-0">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/icon.svg" alt="GraPDF" class="w-6 h-6" />
          <span class="text-base font-semibold tracking-tight">GraPDF</span>
        </div>
        <div class="flex items-center gap-3">
          <button :aria-label="colorMode.preference === 'system' ? 'System mode' : colorMode.preference === 'light' ? 'Light mode' : 'Dark mode'" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" @click="cycleColorMode">
            <!-- Monitor: auto/system -->
            <svg v-if="colorMode.preference === 'system'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <!-- Sun: light mode -->
            <svg v-else-if="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <!-- Moon: dark mode -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <a href="https://www.npmjs.com/package/grapdf" target="_blank" rel="noopener" aria-label="npm" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <path d="M0 0v18h18V0H0zm14.5 14.5H9V5H5.5v9.5H3.5V3.5h11v11z" />
            </svg>
          </a>
          <a href="https://github.com/jayrdeaton/grapdf" target="_blank" rel="noopener" aria-label="GitHub" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 max-w-3xl mx-auto w-full px-6 py-14">
      <!-- Hero -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-3">Merge all PDFs from any webpage into one booklet.</h1>
        <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Paste a URL containing PDF links, configure your options, and download a merged PDF in seconds.</p>
      </div>

      <!-- Binder card -->
      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 mb-6 shadow-sm dark:shadow-none">
        <!-- URL -->
        <div class="mb-5">
          <label for="url-input" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Page URL</label>
          <input id="url-input" v-model="url" type="url" placeholder="https://example.com/documents" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
        </div>

        <!-- Quick options -->
        <div class="flex flex-wrap gap-x-5 gap-y-3 mb-5 items-center">
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input v-model="sort" type="checkbox" :disabled="binding" class="w-4 h-4 accent-sky-500 disabled:opacity-50" />
            <span class="text-sm text-gray-700 dark:text-zinc-300">Sort</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input v-model="reverse" type="checkbox" :disabled="binding" class="w-4 h-4 accent-sky-500 disabled:opacity-50" />
            <span class="text-sm text-gray-700 dark:text-zinc-300">Reverse</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input v-model="autoDownload" type="checkbox" :disabled="binding" class="w-4 h-4 accent-sky-500 disabled:opacity-50" />
            <span class="text-sm text-gray-700 dark:text-zinc-300">Auto-download</span>
          </label>
          <button :disabled="binding" class="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 disabled:opacity-50 transition-colors" @click="showAdvanced = !showAdvanced">
            Advanced
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" :class="showAdvanced ? 'rotate-180' : ''" class="transition-transform">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <!-- Advanced options -->
        <div v-if="showAdvanced" class="grid sm:grid-cols-2 gap-4 mb-5 pt-4 border-t border-gray-100 dark:border-zinc-800">
          <div>
            <label for="limit" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Limit</label>
            <input id="limit" v-model.number="limitValue" type="number" min="1" placeholder="No limit" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
          </div>
          <div>
            <label for="trim" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Trim <span class="font-normal text-gray-400 dark:text-zinc-500">(pts)</span></label>
            <input id="trim" v-model.number="trim" type="number" min="0" max="200" placeholder="0" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
          </div>
          <div>
            <label for="selector" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">CSS selector</label>
            <input id="selector" v-model="selector" type="text" placeholder=".content" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
          </div>
          <div>
            <label for="include" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Include <span class="font-normal text-gray-400 dark:text-zinc-500">(regex)</span></label>
            <input id="include" v-model="include" type="text" placeholder="chapter-\d+" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
          </div>
          <div>
            <label for="exclude" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Exclude <span class="font-normal text-gray-400 dark:text-zinc-500">(regex)</span></label>
            <input id="exclude" v-model="exclude" type="text" placeholder="appendix" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
          </div>
          <div>
            <label for="preview-pages" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Preview pages</label>
            <input id="preview-pages" v-model.number="previewPages" type="number" min="1" placeholder="All pages" :disabled="binding" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
          </div>
        </div>

        <!-- Submit / Cancel -->
        <button v-if="!binding" :disabled="!url.trim()" class="w-full bg-sky-500 hover:bg-sky-400 disabled:bg-gray-100 dark:disabled:bg-zinc-800 disabled:text-gray-400 dark:disabled:text-zinc-600 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="bind">
          Bind PDFs
        </button>
        <button v-else class="w-full bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="cancel">
          Cancel
        </button>
      </div>

      <!-- Progress terminal — always dark, intentionally -->
      <div v-if="progress.length > 0 || error" ref="progressContainer" class="bg-black border border-zinc-800 rounded-2xl p-5 mb-6 font-mono text-sm leading-relaxed overflow-auto max-h-64">
        <p v-for="(msg, i) in progress" :key="i" class="text-emerald-400"><span class="text-zinc-600 select-none">› </span>{{ msg }}</p>
        <p v-if="error" class="text-red-400"><span class="text-zinc-600 select-none">✗ </span>{{ error }}</p>
        <span v-if="binding" class="text-zinc-500 animate-pulse">▌</span>
      </div>

      <!-- PDF preview -->
      <div v-if="previewItem" ref="previewContainer" class="mb-6">
        <iframe :src="previewItem.blobUrl" class="w-full rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm dark:shadow-none" style="height: 520px;" title="PDF preview" />
      </div>

      <!-- History -->
      <div v-if="history.length > 0" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl mb-6 shadow-sm dark:shadow-none overflow-hidden">
        <div class="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 dark:border-zinc-800">
          <span class="text-sm font-medium text-gray-500 dark:text-zinc-400">History</span>
          <button class="text-xs text-gray-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" @click="clearHistory">Clear all</button>
        </div>
        <div
          v-for="(item, index) in history"
          :key="item.id"
          :class="[
            'flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors',
            index < history.length - 1 ? 'border-b border-gray-100 dark:border-zinc-800' : '',
            activePreviewId === item.id
              ? 'bg-sky-50 dark:bg-sky-950/30'
              : 'hover:bg-gray-50 dark:hover:bg-zinc-800/50'
          ]"
          @click="activePreviewId = item.id"
        >
          <!-- PDF icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 text-gray-400 dark:text-zinc-500">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline gap-2">
              <p class="text-sm font-medium truncate">{{ item.filename }}</p>
              <span class="flex-shrink-0 text-xs text-gray-400 dark:text-zinc-500">{{ formatSize(item.size) }}</span>
            </div>
            <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
              <span v-for="badge in settingBadges(item.settings)" :key="badge" class="inline-block text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400">{{ badge }}</span>
              <p v-if="settingBadges(item.settings).length === 0" class="text-xs text-gray-400 dark:text-zinc-500 truncate">{{ item.sourceUrl }}</p>
            </div>
          </div>
          <span class="flex-shrink-0 text-xs text-gray-400 dark:text-zinc-500">{{ formatTime(item.timestamp) }}</span>
          <a
            :href="item.blobUrl"
            :download="item.filename"
            class="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
            title="Download"
            @click.stop
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-24 pt-12 border-t border-gray-200 dark:border-zinc-800">
        <h2 class="text-2xl font-semibold mb-8 text-center">Also available as a CLI</h2>

        <!-- Install + Usage -->
        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div>
            <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">npm install -g grapdf</div>
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">grapdf &lt;url&gt; [output]</div>
          </div>
        </div>

        <!-- Options -->
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 mb-10 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
          <p><span class="text-sky-500 dark:text-sky-400">--sort</span> Sort PDFs alphabetically by URL</p>
          <p><span class="text-sky-500 dark:text-sky-400">--reverse</span> Reverse the order before merging</p>
          <p><span class="text-sky-500 dark:text-sky-400">--limit</span> <span class="text-gray-400 dark:text-zinc-500">n</span> Maximum number of PDFs to include</p>
          <p><span class="text-sky-500 dark:text-sky-400">--selector</span> <span class="text-gray-400 dark:text-zinc-500">css</span> CSS selector to scope link search</p>
          <p><span class="text-sky-500 dark:text-sky-400">--include</span> <span class="text-gray-400 dark:text-zinc-500">regex</span> Include only matching PDF URLs</p>
          <p><span class="text-sky-500 dark:text-sky-400">--exclude</span> <span class="text-gray-400 dark:text-zinc-500">regex</span> Exclude matching PDF URLs</p>
          <p><span class="text-sky-500 dark:text-sky-400">--trim</span> <span class="text-gray-400 dark:text-zinc-500">pts</span> Crop all four sides by N points</p>
          <p><span class="text-sky-500 dark:text-sky-400">--dry-run</span> Preview PDF URLs without downloading</p>
        </div>

        <!-- Feature cards -->
        <div class="grid sm:grid-cols-3 gap-4">
          <div v-for="feature in features" :key="feature.title" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm dark:shadow-none">
            <h3 class="font-semibold mb-1.5">{{ feature.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-400 dark:text-zinc-500 flex-shrink-0">
      Powered by
      <a href="https://infinitetoken.com" target="_blank" rel="noopener" class="text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 underline underline-offset-2 ml-1 transition-colors">Infinite Token</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
const AUTO_SCROLL_THRESHOLD_PX = 24

const colorMode = useColorMode()

const cycleColorMode = () => {
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (colorMode.preference === 'system') colorMode.preference = systemIsDark ? 'light' : 'dark'
  else if (colorMode.preference === 'dark') colorMode.preference = systemIsDark ? 'system' : 'light'
  else colorMode.preference = systemIsDark ? 'dark' : 'system'
}

const url = ref('')
const sort = ref(false)
const reverse = ref(false)
const limitValue = ref<number | null>(null)
const previewPages = ref<number | null>(null)
const selector = ref('')
const include = ref('')
const exclude = ref('')
const trim = ref<number | null>(null)
const showAdvanced = ref(false)
const binding = ref(false)
const progress = ref<string[]>([])
const progressContainer = ref<HTMLElement | null>(null)
const error = ref<string | null>(null)
const autoDownload = ref(true)

interface HistorySettings {
  sort: boolean
  reverse: boolean
  limit: number | null
  pages: number | null
  selector: string
  include: string
  exclude: string
  trim: number | null
}

interface HistoryItem {
  id: number
  filename: string
  blobUrl: string
  timestamp: Date
  sourceUrl: string
  size: number
  settings: HistorySettings
}

const history = ref<HistoryItem[]>([])
const activePreviewId = ref<number | null>(null)
const previewContainer = ref<HTMLElement | null>(null)
let nextId = 0

const previewItem = computed(() => {
  if (history.value.length === 0) return null
  if (activePreviewId.value !== null) {
    return history.value.find((h) => h.id === activePreviewId.value) ?? history.value[0]
  }
  return history.value[0]
})

onMounted(() => {
  const stored = localStorage.getItem('autoDownload')
  if (stored !== null) autoDownload.value = stored !== 'false'
})

watch(autoDownload, (v) => localStorage.setItem('autoDownload', String(v)))

const clearHistory = () => {
  history.value.forEach((item) => URL.revokeObjectURL(item.blobUrl))
  history.value = []
  activePreviewId.value = null
}

const formatTime = (date: Date): string =>
  date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const formatSize = (bytes: number): string => {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const settingBadges = (s: HistorySettings): string[] => {
  const badges: string[] = []
  if (s.sort) badges.push('sorted')
  if (s.reverse) badges.push('reversed')
  if (s.limit) badges.push(`${s.limit} PDFs`)
  if (s.pages) badges.push(`${s.pages} pages`)
  if (s.selector) badges.push('selector')
  if (s.include || s.exclude) badges.push('filtered')
  if (s.trim) badges.push('trimmed')
  return badges
}

const features = [
  {
    title: 'Scrapes all PDFs',
    description: 'Finds every linked PDF on any static or server-rendered webpage and merges them in order.'
  },
  {
    title: 'Smart filtering',
    description: 'Sort, limit, and filter PDFs by URL regex or CSS scope before merging into a single booklet.'
  },
  {
    title: 'CLI + library',
    description: 'Use from the terminal or import buildBooklet directly in your Node.js project.'
  }
]

let eventSource: EventSource | null = null

watch(
  () => progress.value.length,
  async () => {
    if (!binding.value) return
    if (!progressContainer.value) return

    const distanceFromBottom = progressContainer.value.scrollHeight - progressContainer.value.scrollTop - progressContainer.value.clientHeight
    const shouldAutoScroll = distanceFromBottom <= AUTO_SCROLL_THRESHOLD_PX

    await nextTick()
    if (!progressContainer.value || !shouldAutoScroll) return
    progressContainer.value.scrollTop = progressContainer.value.scrollHeight
  }
)

const cancel = () => {
  eventSource?.close()
  binding.value = false
  progress.value.push('Cancelled.')
}

const bind = () => {
  if (!url.value.trim() || binding.value) return

  binding.value = true
  progress.value = []
  error.value = null

  const params = new URLSearchParams({ url: url.value.trim() })
  if (sort.value) params.set('sort', 'true')
  if (reverse.value) params.set('reverse', 'true')
  if (limitValue.value != null && limitValue.value > 0) params.set('limit', String(limitValue.value))
  if (previewPages.value != null && previewPages.value > 0) params.set('pages', String(previewPages.value))
  if (selector.value.trim()) params.set('selector', selector.value.trim())
  if (include.value.trim()) params.set('include', include.value.trim())
  if (exclude.value.trim()) params.set('exclude', exclude.value.trim())
  if (trim.value != null && trim.value > 0) params.set('trim', String(trim.value))

  eventSource?.close()
  eventSource = new EventSource(`/api/bind?${params.toString()}`)

  eventSource.onmessage = async (event) => {
    type BindEvent = { type: 'progress'; message: string } | { type: 'complete'; data: string; filename: string; mimeType: string } | { type: 'error'; message: string }

    const msg = JSON.parse(event.data as string) as BindEvent

    if (msg.type === 'progress') {
      progress.value.push(msg.message)
    } else if (msg.type === 'complete') {
      const byteStr = atob(msg.data)
      const bytes = new Uint8Array(byteStr.length)
      for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
      const blob = new Blob([bytes], { type: msg.mimeType })
      const blobUrl = URL.createObjectURL(blob)
      const id = ++nextId

      history.value.unshift({
        id,
        filename: msg.filename,
        blobUrl,
        timestamp: new Date(),
        sourceUrl: url.value.trim(),
        size: blob.size,
        settings: {
          sort: sort.value,
          reverse: reverse.value,
          limit: limitValue.value,
          pages: previewPages.value,
          selector: selector.value.trim(),
          include: include.value.trim(),
          exclude: exclude.value.trim(),
          trim: trim.value
        }
      })
      activePreviewId.value = id

      binding.value = false
      eventSource?.close()

      await nextTick()
      previewContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

      if (autoDownload.value) {
        const a = document.createElement('a')
        a.href = blobUrl
        a.download = msg.filename
        a.click()
      }
    } else if (msg.type === 'error') {
      error.value = msg.message
      binding.value = false
      eventSource?.close()
    }
  }

  eventSource.onerror = () => {
    if (binding.value) {
      error.value = 'Connection error — check the URL and try again.'
      binding.value = false
    }
    eventSource?.close()
  }
}

onUnmounted(() => {
  eventSource?.close()
  history.value.forEach((item) => URL.revokeObjectURL(item.blobUrl))
})
</script>
