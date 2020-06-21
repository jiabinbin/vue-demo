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
  name: 'About',
  data () {
    return {
      searchList: [
        {
          label: '测试1',
          type: 'input',
          key: 'name1'
        },
        {
          label: '状态1',
          type: 'select',
          key: 'status1',
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
          label: '测试2',
          type: 'input',
          key: 'name2'
        },
        {
          label: '状态1',
          type: 'select',
          key: 'status2',
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
          label: '测试3',
          type: 'inputA',
          key: 'name3'
        },
        {
          label: '状态1',
          type: 'select',
          key: 'status4',
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
          label: '测试1',
          type: 'inputD',
          key: 'name'
        },
        {
          label: '状态1',
          type: 'select',
          key: 'statusA',
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
          label: '测试1',
          type: 'input',
          key: 'nameFD'
        },
        {
          label: '状态1',
          type: 'select',
          key: 'statusSS',
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
          label: '测试1',
          type: 'input',
          key: 'nameDDSF'
        },
        {
          label: '状态1',
          type: 'select',
          key: 'statusSFK',
          options: [
            {
              key: '00',
              value: '未完成'
            }, {
              key: '01',
              value: '完成'
            }
          ]
        }
      ]
    }
  },
  methods: {
    searchHandler (values) {
      console.log(values)
    }
  }
}
</script>
