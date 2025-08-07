import { createApp } from 'vue'
import App from './App.vue'

// plugins
import registerPlugins from '@/plugins';
import componentAliases from '@/plugins/componentAliases';

// 라우터
import router from '@/router'

const app = createApp(App);

registerPlugins(app);
componentAliases(app);

app.use(router).mount('#app')
