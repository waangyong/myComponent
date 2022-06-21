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
  },
  {
    key: 3,
    name: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  },
  {
    key: 4,
    name: 'John2',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 5,
    name: 'Jim2',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: 6,
    name: 'Joe2',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
export default {
  name: 'myDropdownTable',
  model: {
    prop: 'value',
    event: 'change' // onchange 事件
  },
  props: {
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
    value: {
      type: Array,
      default: () => []
    }
  },
  render() {
    return (
      <a-select
        props={{ ...this._props, ...this.$attrs, value: this.value3 }}
        style="width:400px"
      >
        <div slot="dropdownRender" onmousedown={(e) => e.preventDefault()}>
          <a-table
            columns={this.columns}
            data-source={this.data}
            props={this._props}
            row-selection={{
              selectedRowKeys: this.selectedRowKeys,
              onChange: this.onSelectChange
            }}
          ></a-table>
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
    this.selectedRowKeys = JSON.parse(JSON.stringify(this.value))
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
      this.$emit('change', this.selectedRowKeys)
    }
  }
}
</script>