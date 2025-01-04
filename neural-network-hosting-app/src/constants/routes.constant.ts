export const ROUTES = {
    AUTH: {
        LOGIN: {
            PATH: "/auth/login",
            NAME: "auth/login"
        },
        REGISTRATION: {
            PATH: "/auth/registration",
            NAME: "auth/registration"
        }
    },
    DASHBOARD: {
        HOME: {
            PATH: "/dashboard",
            NAME: "dashboard/home"
        }
    }
} as const