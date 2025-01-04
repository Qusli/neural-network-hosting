import type { RouteRecordRaw } from 'vue-router'

import { ROUTES } from '@/constants/routes.constant'

export default [
  {
    path: '/dashboard',
    component: () => import('@/templates/MainTemplate.vue'),
    children: [
      {
        path: ROUTES.DASHBOARD.HOME.PATH,
        name: ROUTES.DASHBOARD.HOME.NAME,
        component: () => import('@/views/dashboard/HomeView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
