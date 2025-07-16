import 'vuetify/styles'
import '@/assets/css/vuetify.scss'
import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const themeH = {
    dark : false,
}

const vuetifyStyle = createVuetify(
    {
        theme : themeH
    }
);

export default vuetifyStyle;