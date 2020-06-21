const requireStore = require.context('./modules/', false, /[a-z]\w+\.(js)$/)
/*
 store = {
    app,
    user,
    xxx
 }
*/
const modules = requireStore.keys().reduce((p, n) => {
  // 获取store的名字
  const name = n.replace(/\.\//, '').replace(/\.js/, '')
  const store = {}
  store[name] = requireStore(n).default
  return { ...p, ...store }
}, {})
console.log(modules)

export default modules
