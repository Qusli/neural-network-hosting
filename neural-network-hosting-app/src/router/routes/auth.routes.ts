import type { RouteRecordRaw } from "vue-router";

import { ROUTES } from "@/constants/routes.constant";

export default [
    {
        path: "/auth",
        component: () => import("@/templates/AuthTemplate.vue"),
        children: [
            {
                path: "/auth/login",
                name: ROUTES.AUTH.LOGIN,
                component: () => import("@/views/auth/LoginView.vue")
            },
            {
                path: "/auth/registration",
                name: ROUTES.AUTH.REGISTRATION,
                component: () => import("@/views/auth/RegistrationView.vue")
            }
        ]
    }

] as RouteRecordRaw[]