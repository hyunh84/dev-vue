import { h } from 'vue'
import * as allMdiIcons from '@mdi/js'

// 기존 .vue 아이콘들 가져오기
const modules = import.meta.glob('@/assets/images/svgIcon/*.vue', { eager: true })

const customIcons = {}
Object.entries(modules).forEach(([path, module]) => {
  const iconName = path
    .split('/')
    .pop()
    .replace('.vue', '')
    .replace(/^Icon/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
  customIcons[iconName] = module.default
})

// mdi 아이콘 → Vue 컴포넌트로 변환
const mdiIconComponents = {}
Object.entries(allMdiIcons).forEach(([name, path]) => {
  const kebabName = name.replace(/^mdi/, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  mdiIconComponents[kebabName] = {
    name: `MdiIcon${name}`,
    functional: true,
    render() {
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'currentColor',
          width: '1em',
          height: '1em',
        },
        [h('path', { d: path })]
      )
    },
  }
})


// 통합된 아이콘 컴포넌트
const allIcons = {
  ...mdiIconComponents,
  ...customIcons,
}

// Vuetify용 icon set
const VIco = {
  component: (props) => {
    console.log('props === ', props)
    const iconName = props.icon
    const IconComponent = allIcons[iconName]
    if (!IconComponent) {
      console.error(`❌ Icon not found: ${iconName}`)
      return null
    }
    return h(IconComponent)
  },
}

export { VIco }
