/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

import vuetifyPlugin from './vuetify.js'

const registerPlugins = (app) => {
    app.use(vuetifyPlugin);
}
export default registerPlugins;