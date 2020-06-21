import Vue from 'vue'

// arg1: 自定义组件所在的路径 arg2: 是否遍历路径下中的子文件夹, arg3: 匹配的正则
const requireComponents = require.context('../components/AppBaseComponents', true, /\.vue|js/)
requireComponents.keys().forEach(fileName => {
  const reqCom = requireComponents(fileName)
  const reqComName = reqCom.default.name // 使用组件中 name属性做为全局的组件名进行注册
  Vue.component(reqComName, reqCom.default || reqCom)
})
