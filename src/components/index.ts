// 引入项目中全部的全局组件
import SvgIcon from './svgIcon/index.vue'
import Picture1 from './picture/picture1.vue'
import Picture2 from './picture/picture2.vue'
// 引入element-plus提供的全部图标组件
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局对象
const allGlobalComponent: any = { SvgIcon, Picture1, Picture2 }

// 对外暴露插件对象
export default {
  // 务必叫做install方法
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
    // // 将element-plus提供图标注册为全局组件
    // for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    //   app.component(key, component)
    // }
  },
}
