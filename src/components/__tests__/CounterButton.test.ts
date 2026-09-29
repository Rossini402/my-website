import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CounterButton from '../CounterButton.vue'

describe('CounterButton.vue', () => {
  it('根据 props 渲染 label 与初始计数值', () => {
    const wrapper = mount(CounterButton, {
      props: { label: '点击', initial: 5 },
    })

    expect(wrapper.text()).toBe('点击: 5')
  })

  it('点击后按 step 递增并触发 change 事件', async () => {
    const wrapper = mount(CounterButton, {
      props: { label: '点击', step: 2 },
    })

    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toBe('点击: 4')
    expect(wrapper.emitted('change')).toStrictEqual([[2], [4]])
  })
})
