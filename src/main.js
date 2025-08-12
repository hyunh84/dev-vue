import { createApp } from 'vue'
import App from './App.vue'

// plugins
import registerPlugins from '@/plugins';
import componentAliases from '@/utils/componentAliases';
import icoAliases from '@/utils/icoAliases';

// 라우터
import router from '@/router'

const app = createApp(App);

registerPlugins(app);
componentAliases(app);
icoAliases(app);

app.use(router).mount('#app')
