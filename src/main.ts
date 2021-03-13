import { createApp } from 'vue'
import App from './App.vue'

import DocsHeader from './components/DocsHeader.vue'

import 'onebay-ui/src/style/index.scss'

const app = createApp(App)
app.component('DocsHeader', DocsHeader)
app.mount("#app")