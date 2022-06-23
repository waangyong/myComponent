<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true
  }
]

const data = [
  {
    key: 1,
    name: 'John',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 2,
    name: 'Jim',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  }
]
export default {
  name: 'myDropdownTable',
  model: {
    prop: 'value',
    event: 'change' // onchange 事件
  },
  props: {
    //props可传入a-select和a-table属性
    disabled: {
      type: Boolean,
      default: false
    },
    scroll: {
      type: Object,
      default: () => ({
        x: 400,
        y: 200
      })
    },
    // 父组件传进来的初始值，给自组件赋值，用vmode方式emit出去
    value: {
      type: Array,
      default: () => []
    },
    //多选或者单选
    mode: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'multiple'].indexOf(value) !== -1
      }
    }
  },
  render() {
    return (
      <a-select
        props={{ ...this._props, ...this.$attrs, value: this.value3 }}
        style="width:400px"
        ref="select"
      >
        <div slot="dropdownRender" onmousedown={(e) => e.preventDefault()}>
          {this.mode === 'default' ? (
            <a-table
              columns={this.columns}
              data-source={this.data}
              props={this._props}
              customRow={this.onSelectRow}
            ></a-table>
          ) : (
            <a-table
              columns={this.columns}
              data-source={this.data}
              props={this._props}
              row-selection={{
                selectedRowKeys: this.selectedRowKeys,
                onChange: this.onSelectChange
              }}
              customRow={this.onSelectRow}
            ></a-table>
          )}
        </div>
      </a-select>
    )
  },
  data() {
    return {
      data,
      columns,
      value3: [],
      selectedRowKeys: []
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: this.onSelectChange
      }
    }
  },
  watch: {
    //初始化传进来的参数，在表格上和输入框里面回显，表格选择后在输入框回显
    selectedRowKeys: {
      handler() {
        this.value3 = []
        this.data.map((item) => {
          this.selectedRowKeys.map((inner) => {
            if (item.key === inner) {
              this.value3.push(item.name)
            }
          })
        })
      },
      immediate: true
    }
  },
  created() {
    //获取父组件传进来的value
    this.selectedRowKeys = JSON.parse(JSON.stringify(this.value))
  },
  methods: {
    /**
     * checkbox选择，多选
     * @param {Object} selectedRowKeys - 行数据
     */
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
      this.$emit('change', this.selectedRowKeys)
    },
    /**
     * 点击表格行触发
     * @param {Object} record - 行数据
     * @return Function
     */
    onSelectRow(record) {
      return {
        on: {
          click: () => {
            this.selectedRowKeys = [record.key]
            this.$refs.select.blur()
            this.$emit('change', [record.key])
          }
        }
      }
    }
  }
}
</script>
