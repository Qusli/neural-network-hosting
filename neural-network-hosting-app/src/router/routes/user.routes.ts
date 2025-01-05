import type { RouteRecordRaw } from 'vue-router'

import { ROUTES } from '@/constants/routes.constant'

export default [
  {
    path: '/user',
    component: () => import('@/templates/MainTemplate.vue'),
    children: [
      {
        path: ROUTES.USER.PROFILE.PATH,
        name: ROUTES.USER.PROFILE.NAME,
        component: () => import('@/views/user/ProfileView.vue'),
      },
      {
        path: ROUTES.USER.SETTINGS.PATH,
        name: ROUTES.USER.SETTINGS.NAME,
        component: () => import('@/views/user/SettingsView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
