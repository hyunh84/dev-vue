import { createApp } from 'vue'
import App from './App.vue'

// 라우터
import router from '@/router'

// 뷰티파이 UI
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).mount('#app')
