<template>
  <div id="app">
    <Form msg="Welcome to Your Vue.js App" />
    <my-dropdown-table :allow-clear="true" v-model="selects" mode="multiple">
      <a-icon slot="suffixIcon" type="smile" />
    </my-dropdown-table>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import MyDropdownTable from './components/myDropdownTable.vue'
export default {
  name: 'App',
  components: {
    Form,
    MyDropdownTable
  },
  data() {
    return {
      selects: [1, 2]
    }
  },
  watch: {
    selects: {
      handler() {
        console.log('v-model传到父组件', this.selects)
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
