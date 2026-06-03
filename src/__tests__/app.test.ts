import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import App from '~/app.vue'

describe('App', () => {
  it('renders the headline', async () => {
    const wrapper = await mountSuspended(App)
    expect(wrapper.text()).toContain('GraPDF')
  })

  it('renders the footer attribution', async () => {
    const wrapper = await mountSuspended(App)
    expect(wrapper.html()).toContain('infinitetoken.com')
  })
})
