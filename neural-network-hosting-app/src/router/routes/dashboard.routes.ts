import { ROUTES } from "@/constants/routes.constant";
import type { RouteRecordRaw } from "vue-router";

export default [
    {
        path: "/dashboard",
        component: () => import("@/templates/MainTemplate.vue"),
        children: [
            {
                path: "/dashboard",
                name: ROUTES.DASHBOARD.HOME,
                component: () => import("@/views/dashboard/HomeView.vue")
            }
        ]
    }
] as RouteRecordRaw[]