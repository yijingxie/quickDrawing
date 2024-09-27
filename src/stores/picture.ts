// 仓库里存储关于要生成图片的各项数据
import { defineStore } from 'pinia'
// 引入ts
import type { picParamterTs } from './type'

const usePictureStore = defineStore('Picture', {
  state(): picParamterTs {
    return {
      title: '大标题', // 大标题
      subtitle: '小标题', // 小标题
      width: '765', // 图片宽度
      height: '200', // 图片高度
      padding: '25', // 图片内边距
      titleColor: '#FFFFFF', // 大标题颜色，收集到的颜色数据是16进制数据
      backgroundColor: '#4078C0', // 背景颜色
      subtitleColor: '#FFFFFF', // 小标题颜色
      textAlign: 'start', // 文字对齐方式（居左、居中、居右）
      titleFont: 'Red Hat Display', // 大标题字体类型
      subtitleFont: 'Kalam', // 小标题字体类型
      titleSize: '40', // 大标题字体大小
      subtitleSize: '20', // 小标题字体大小
      borderColor: '#FFFFFF', // 边框颜色
      borderSize: '0', // 边框大小
      borderRadius: '7', // 边框圆角
      patternsColor: '#FFFFFF', // 背景花样颜色
      patternSize: '100', // 背景花样大小
      patternOpacity: '0.25', // 背景花样透明度
      patterns: 'jigsaw', // 背景花样
      docorationImgSrcSize: '100', // 图片里的装饰小图的大小
      decorationImgSrc: '/src/assets/images/decorations/my-octocat.png', // 图片里的装饰小图
    }
  },
  actions: {},
  getters: {},
})

export default usePictureStore

// export const usePictureStore = defineStore('Picture', () => {
//   // 注意：
//   // 1. 图片的初始宽度和高度应该是动态的，是根据屏幕宽度生成的（或者右侧right区域的宽度）
//   // 制作图片的一些公共数据
//   const picParamter = ref<picParamterTs>({
//     title: '大标题', // 大标题
//     subtitle: '小标题', // 小标题
//     width: 765, // 图片宽度
//     height: 200, // 图片高度
//     padding: 25, // 图片内边距
//     titleColor: '#FFFFFF', // 大标题颜色，收集到的颜色数据是16进制数据
//     backgroundColor: '#4078C0', // 背景颜色
//     subtitleColor: '#FFFFFF', // 小标题颜色
//     textAlign: 'start', // 文字对齐方式（居左、居中、居右）
//     titleFont: 'Red Hat Display', // 大标题字体类型
//     subtitleFont: 'Kalam', // 小标题字体类型
//     titleSize: 40, // 大标题字体大小
//     subtitleSize: 20, // 小标题字体大小
//     decorationImg: [
//       // 图片里的装饰小图
//       { id: 0, src: '/src/assets/images/decorations/my-octocat.png' },
//     ],
//   })

//   return { picParamter }
// })
