import { type Ref, ref } from 'vue'

import { Device } from '@/enums/device.enum'

import { windowInnerWidth } from './on-resize'

const getDevice = (): Device => {
  if (windowInnerWidth.value <= 560) {
    return Device.PHONE
  }

  if (windowInnerWidth.value <= 768) {
    return Device.TABLET
  }

  return Device.DESKTOP
}

export const device: Ref<Device> = ref(getDevice())
