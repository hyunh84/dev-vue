// JS 기준 (TS 아님)
import { defineComponent, h } from 'vue'

// 1) 폴더의 .vue 아이콘을 전부 수집
const modules = import.meta.glob('/src/assets/images/svgIcon/*.vue', { eager: true })

// 2) 파일명 → 별칭(kebab-case) 변환: IconClose.vue → 'close'
const toAlias = (path) =>
  path
	.split('/').pop()          // IconClose.vue
	.replace('.vue', '')       // IconClose
	.replace(/^Icon/, '')      // Close
	.replace(/([a-z0-9])([A-Z])/g, '$1-$2') // close
	.toLowerCase()

// 3) 아이콘 맵 구성
const iconMap = {}
Object.entries(modules).forEach(([path, mod]) => {
  const name = toAlias(path)
  iconMap[name] = mod.default
})

// 4) 전역 설치 함수
const icoAliases = (app)=> {
  // (옵션) 개별 아이콘도 전역 등록: <icon-close />, <icon-plus />
  Object.entries(iconMap).forEach(([name, comp]) => {
	app.component(`icon-${name}`, comp)
  })

  // 핵심) 전역 SvgIco 컴포넌트: <SvgIco icon="close" size="24" />
  app.component('SvgIco',
	defineComponent({
	  name: 'SvgIco',
	  props: {
		icon: { type: String, required: true }, // 'close', 'plus' ...
		size: [String, Number],
		title: String,
		tag: { type: String, default: 'span' }, // 감쌀 태그 지정 가능
	  },
	  setup(props, { attrs }) {
		return () => {
		  const Comp = iconMap[props.icon]
		  if (!Comp) {
			console.error(`[SvgIco] Icon not found: "${props.icon}"`)
			return null
		  }

		  // size -> width/height
		  let wh
		  if (props.size != null) {
			const v = typeof props.size === 'number' ? `${props.size}px` : props.size
			wh = { width: v, height: v }
		  }

		  // 아이콘 엘리먼트
		  const iconEl = h(Comp, {
			...attrs,
			...(wh || {}),
			title: props.title,
		  })

		  // span(or props.tag)으로 감싸서 리턴
		  return h(
			props.tag,
			{ class: 'svgIco' }, // 필요 시 wrapper 클래스
			[iconEl]
		  )
		}
	  },
	})
  )
}

console.log('iconMap ===== ', iconMap);

export default icoAliases;

// 필요하면 외부에서 맵 접근 가능하게 export
export { iconMap }
