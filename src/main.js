import { createApp } from 'vue'
import App from './App.vue'

// plugins
import registerPlugins from './plugins'

// 라우터
import router from '@/router'

const app = createApp(App);

registerPlugins(app);

app.use(router).mount('#app')
