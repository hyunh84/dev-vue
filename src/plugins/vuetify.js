import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/assets/css/vuetify.scss'

import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/mdi-svg'
import { VIco } from '@/utils/svgIconSet'

import VBtnUi from '@/components/Button/VBtnUi.vue'

// colors = {}
// primary	주요 색상 (버튼, 강조 등)
// secondary	보조 색상
// success	성공 메시지나 상태 표시용
// info	정보성 메시지 색상
// warning	경고 메시지 색상
// error	에러 상태 표시 색상

const themeH = {
	dark : false,
	colors : {
		primary : '#f52f6c',
		error : '#f43327',
	}
}

const vuetifyStyle = createVuetify({
	theme : {
		defaultTheme : 'themeH',
		themes : {
			themeH
		}
	},
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			VIco,
		}
	},
	aliases : {
		VBtnUi,
	},
	defaults : {
		VContainer: {
			fluid: true,
		},
		VBtn : {
			variant : 'flat' | 'outline',
		}
	}
})

export default vuetifyStyle;