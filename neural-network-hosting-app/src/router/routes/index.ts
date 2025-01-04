import type { RouteRecordRaw } from 'vue-router'

import accountRoutes from './account.routes'
import authRoutes from './auth.routes'
import dashboardRoutes from './dashboard.routes'

export default [...authRoutes, ...dashboardRoutes, ...accountRoutes] as RouteRecordRaw[]
