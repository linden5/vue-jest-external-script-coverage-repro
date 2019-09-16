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