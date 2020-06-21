/**
 * 查询表单组件
 *  props: SearchList
 *  接受一个数组，用于查询。
 *  代码我上传到git哈。
 *  要用的时候自己去看
 */
const SearchForm = {
  name: 'SearchForm',
  props: {
    searchList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      form: null
    }
  },
  created () {
    this.form = this.$form.createForm(this, { name: 'searchForm' })
  },
  methods: {
    renderFormItem (item) {
      const { label, key, type, options = [] } = item
      /**
       * v-decorator="[
       'username',
       {
              rules: [{ required: true, message: 'Username is required!' }],
            },
       ]"
       */
      const decorator = []
      decorator.push(key)
      decorator.push({
        rules: [{ required: true, message: `${label}不能为空!` }]
      })
      // 可以扩充其它的，如日期，Switch等
      return (
        type === 'select' ? (
          <a-select
            style="width: 300px;"
            v-decorator={decorator}
          >
            {
              options ? options.map(it => {
                return (
                  <a-select-option key={it.key}>
                    {it.value}
                  </a-select-option>
                )
              }) : null
            }
          </a-select>
        ) : type === 'dateRange' ? (
          <a-range-picker
            v-decorator={decorator}
          />
        ) : (
          <a-input
            v-decorator={decorator}
            style="width: 300px;"
          ></a-input>
        )
      )
    },
    renderForm () {
      const { searchList } = this
      return (
        searchList.map(it => {
          const { label } = it
          return (
            <a-col span={8}>
              <a-form-item label={label}>
                { this.renderFormItem(it) }
              </a-form-item>
            </a-col>
          )
        })
      )
    },
    resetHandler () {
      this.form.resetFields()
      this.$emit('on-search', {})
    },
    searchHandler () {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('on-search', values)
        }
      })
    }
  },
  render () {
    const { form } = this
    return (
      <a-form layout="inline" form={form}>
        <a-row>
          {this.renderForm()}
          <a-col span={24} style="textAlign: right">
            <a-button onClick={this.resetHandler}>重置</a-button>
            <a-button onClick={this.searchHandler} type="primary" style="marginLeft: 10px;">查询</a-button>
          </a-col>
        </a-row>
      </a-form>
    )
  }
}

export default SearchForm
