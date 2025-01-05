import type { RouteRecordRaw } from 'vue-router'

import { ROUTES } from '@/constants/routes.constant'

export default [
  {
    path: '/workplace',
    component: () => import('@/templates/MainTemplate.vue'),
    children: [
      {
        path: ROUTES.WORKPLACE.HOSTINGS.PATH,
        name: ROUTES.WORKPLACE.HOSTINGS.NAME,
        component: () => import('@/views/workplace/HostingsView.vue'),
      },
      {
        path: ROUTES.WORKPLACE.SETTINGS.PATH,
        name: ROUTES.WORKPLACE.SETTINGS.NAME,
        component: () => import('@/views/workplace/SettingsView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
