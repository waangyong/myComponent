import Vue from 'vue'
import App from './App.vue'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(ant)
new Vue({
  render: h => h(App),
}).$mount('#app')
