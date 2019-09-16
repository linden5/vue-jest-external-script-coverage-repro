import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/HelloWorld.vue'
import HelloWorldExternalScript from '@/HelloWorldExternalScript.vue'

describe('Internal and external script coverage test', () => {
  function testHelloWorld(component) {
    const msg = 'new message'
    const wrapper = shallowMount(component, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.vm.greeting).toBe(msg + 'to everyone')
  }


  it('passes test of HelloWorld with internal script, with 100% coverage', () => {
    testHelloWorld(HelloWorld)
  })

  it('passes test of HelloWorld with external script, with 0% coverage', () => {
    testHelloWorld(HelloWorldExternalScript)
  })
})
