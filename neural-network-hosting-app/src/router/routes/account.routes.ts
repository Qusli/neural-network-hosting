import { ROUTES } from "@/constants/routes.constant";
import type { RouteRecordRaw } from "vue-router";

export default [
    {
        path: "/account",
        component: () => import("@/templates/MainTemplate.vue"),
        children: [
            {
                path: ROUTES.ACCOUNT.PROFILE.PATH,
                name: ROUTES.ACCOUNT.PROFILE.NAME,
                component: () => import("@/views/account/ProfileView.vue")
            },
            {
                path: ROUTES.ACCOUNT.SETTINGS.PATH,
                name: ROUTES.ACCOUNT.SETTINGS.NAME,
                component: () => import("@/views/account/SettingsView.vue")
            }
        ]
    }
] as RouteRecordRaw[]