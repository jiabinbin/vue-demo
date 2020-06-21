<template>
  <a-row>
    <a-col span="24">
      <SearchForm
        :search-list="searchList"
        @on-search="searchHandler"
      >
      </SearchForm>
    </a-col>
    <a-col span="24">
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      searchList: [
        {
          label: '姓名',
          type: 'input',
          key: 'name'
        },
        {
          label: '状态',
          type: 'select',
          key: 'status',
          options: [
            {
              key: '00',
              value: '未完成'
            }, {
              key: '01',
              value: '完成'
            }
          ]
        },
        {
          label: '日期',
          type: 'dateRange',
          key: 'dateRange'
        }
      ]
    }
  },
  methods: {
    searchHandler (values) {
      console.log('parent search handler', values)
      // do post
    }
  }
}
</script>

<style scoped>

</style>
