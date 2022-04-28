import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'de',
  fallbackFormat: true,
  messages
})

createApp(App).use(i18n).mount('#app')
