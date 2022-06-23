<template>
  <div>
    <input :value="name1" type="text" @input="inputChange" />
    <!-- <input :value="name2" @input="(e) => (name2 = e.target.value)" />
    <input v-bind:value="name2" v-on:input="(e) => (name2 = e.target.value)" />
    <input v-model="name2" /> -->
  </div>
</template>
<script>
export default {
  name: 'myComponent',
  model: {
    prop: 'xxx'
  },
  props: {
    name1: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      name2: '22'
    }
  },
  methods: {
    inputChange(e) {
      this.nam1 = e.target.value
      this.$emit('xxx', e.target.value)
    }
  }
}
</script>