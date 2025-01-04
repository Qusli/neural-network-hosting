import type { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes.constant";

export default [
    {
        path: "/auth",
        component: () => import("@/templates/AuthTemplate.vue"),
        children: [
            {
                path: ROUTES.AUTH.LOGIN.PATH,
                name: ROUTES.AUTH.LOGIN.NAME,
                component: () => import("@/views/auth/LoginView.vue")
            },
            {
                path: ROUTES.AUTH.REGISTRATION.PATH,
                name: ROUTES.AUTH.REGISTRATION.NAME,
                component: () => import("@/views/auth/RegistrationView.vue")
            }
        ]
    }

] as RouteRecordRaw[]