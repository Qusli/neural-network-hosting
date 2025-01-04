import { type Ref, ref } from 'vue'

export const windowInnerWidth: Ref<number> = ref(window.innerWidth)

export function onReisze() {
  window.addEventListener('resize', () => (windowInnerWidth.value = window.innerWidth))
}
