// src/plugins/componentAliases.js
import VSelectUi from '@/components/Select/VSelectUi.vue'
import VTextUi from '@/components/VTextField/VTextUi.vue'
import VLayerUi from '@/components/Layer/VLayerUi.vue'
import VLayer from '@/components/Layer/index.vue'

// alias 목록 정의
const componentAliases = {
  VSelectUi,
  VTextUi,
  VLayer,
  VLayerUi,
}

export default (app)=> {
	Object.entries(componentAliases).forEach(([alias, comp]) => {
	  app.component(alias, comp)
	});
}