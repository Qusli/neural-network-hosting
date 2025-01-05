import type { RouteRecordRaw } from 'vue-router'

import { ROUTES } from '@/constants/routes.constant'

export default [
  {
    path: '/dashboard',
    component: () => import('@/templates/MainTemplate.vue'),
    children: [
      {
        path: ROUTES.DASHBOARD.HOSTINGS.PATH,
        name: ROUTES.DASHBOARD.HOSTINGS.NAME,
        component: () => import('@/views/dashboard/HostingsView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
