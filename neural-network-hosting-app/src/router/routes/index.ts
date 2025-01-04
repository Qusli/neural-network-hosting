import type { RouteRecordRaw } from "vue-router";

import authRoutes from "./auth.routes";
import dashboardRoutes from "./dashboard.routes";
import accountRoutes from "./account.routes";

export default [
    ...authRoutes,
    ...dashboardRoutes,
    ...accountRoutes
] as RouteRecordRaw[]