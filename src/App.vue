<template>
  <div id="app">
    <Form msg="Welcome to Your Vue.js App" />
    <my-dropdown-table :allow-clear="true" v-model="selects" mode="multiple">
      <a-icon slot="suffixIcon" type="smile" />
    </my-dropdown-table>
    <my-component v-model="name1"></my-component>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import MyDropdownTable from './components/myDropdownTable.vue'
import myComponent from './components/myComponent'
export default {
  name: 'App',
  components: {
    Form,
    MyDropdownTable,
    myComponent
  },
  data() {
    return {
      selects: [1, 2],
      name1: '1123'
    }
  },
  watch: {
    selects: {
      handler() {
        console.log('v-model传到父组件', this.selects)
      }
    },
    name1: {
      handler() {
        console.log(this.name1)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
