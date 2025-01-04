export const ROUTES = {
  AUTH: {
    LOGIN: {
      PATH: '/auth/login',
      NAME: 'auth/login',
    },
    REGISTRATION: {
      PATH: '/auth/registration',
      NAME: 'auth/registration',
    },
  },
  DASHBOARD: {
    HOME: {
      PATH: '/dashboard',
      NAME: 'dashboard/home',
    },
  },
  ACCOUNT: {
    PROFILE: {
      PATH: '/account/profile',
      NAME: 'account/profile',
    },
    SETTINGS: {
      PATH: '/account/settings',
      NAME: 'account/settings',
    },
  },
} as const
