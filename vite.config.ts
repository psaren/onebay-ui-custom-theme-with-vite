import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $color-brand: #ffc701;
          $color-brand-light: #ffd541;
          $color-brand-dark: #cc9f01;
        `
      }
    }
  },
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'onebay-ui',
          style(name) {
            return `onebay-ui/src/style/components/${name}.scss`
          }
        }
      ]
    })
  ]
})