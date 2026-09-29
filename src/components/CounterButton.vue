<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** 按钮前缀文案 */
    label: string
    /** 初始计数值 */
    initial?: number
    /** 每次点击的步长 */
    step?: number
  }>(),
  {
    initial: 0,
    step: 1,
  },
)

const emit = defineEmits<{
  change: [value: number]
}>()

const count = ref(props.initial)

const display = computed(() => `${props.label}: ${count.value}`)

function increment() {
  count.value += props.step
  emit('change', count.value)
}
</script>

<template>
  <button type="button" @click="increment">{{ display }}</button>
</template>
