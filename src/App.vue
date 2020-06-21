<template>
  <a-config-provider :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data () {
    return {
      zhCN
    }
  }
}
</script>

<style>
</style>
