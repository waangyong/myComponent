
<script>
import formDatas from './form.json';
export default {
  name: 'HelloWorld',
  render() {
    return (
      <div>
        <a-form-model
          rules={this.rules}
          ref="formRefs"
          props={{ model: this.forms }}
          on-input={() => {}}
        >
          <a-row>
            {this.formDatas.map((item) => {
              return (
                <a-col span={item.span} onMousedown={this.handle}>
                  <a-form-model-item
                    label-col={this.labelCol}
                    wrapper-col={this.wrapperCol}
                    label={item.label}
                    prop={item.key}
                  >
                    {
                      <item.type
                        placeholder={item.placeholder}
                        v-model={this.forms[item.key]}
                        mode={item.mode}
                        disabled={item.disabled}
                      >
                        {item.childrenName
                          ? item.options.map((option) => {
                              return (
                                <item.childrenName
                                  value={option.value}
                                  disabled={option.disabled}
                                >
                                  {option.name}
                                </item.childrenName>
                              );
                            })
                          : ''}
                      </item.type>
                    }
                  </a-form-model-item>
                </a-col>
              );
            })}
          </a-row>
        </a-form-model>
        <a-button
          onClick={() => {
            this.submit();
          }}
        >
          提交
        </a-button>
        <a-button
          onClick={() => {
            this.resetForm();
          }}
        >
          重置
        </a-button>
      </div>
    );
  },
  data() {
    return {
      forms: {},
      formDatas,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      rules: {}
    };
  },
  watch: {
    formDatas: {
      handler() {
        this.formDatas.map((item) => {
          this.$set(this.forms, item.key, item.initValue);
          this.$set(this.rules, item.key, item.rule);
        });
      },
      immediate: true
    }
  },
  methods: {
    submit() {
      this.$refs.formRefs
        .validate()
        .then((res) => {
          console.log(res, this.forms);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    resetForm() {
      this.$refs.formRefs.resetFields();
    },
    handle() {
      console.log(1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
