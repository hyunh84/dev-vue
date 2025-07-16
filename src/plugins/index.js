/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

import vuetifyStyle from './vuetify.js'

const registerPlugins = (app) => {
    app.use(vuetifyStyle);
}
export default registerPlugins;