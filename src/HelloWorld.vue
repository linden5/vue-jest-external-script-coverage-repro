<template>
  <h1>{{ msg }}</h1>
</template>

<script>
// The script here is exactly the same as HelloWorldExternal.js
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  computed: {
    greeting() {
      return this.msg + 'to everyone'
    }
  }
}
</script>
