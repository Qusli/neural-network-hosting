import type { RouteRecordRaw } from 'vue-router'

import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import workplaceRoutes from './workplace.routes'

export default [...authRoutes, ...workplaceRoutes, ...userRoutes] as RouteRecordRaw[]
