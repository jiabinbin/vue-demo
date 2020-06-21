import { createNamespacedHelpers } from 'vuex'
export default function (storeName = 'system') {
  return createNamespacedHelpers(storeName)
}
