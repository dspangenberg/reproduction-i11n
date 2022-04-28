import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(process.cwd(), 'src/locales/**'),
      compositionOnly: true
    })
  ]
})
