// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VxeUI from 'vxe-ui'
import 'vxe-ui/lib/style.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VxeUI)
app.use(VXETable)

app.mount('#app')


app.mount('#app')
