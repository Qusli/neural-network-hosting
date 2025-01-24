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
  WORKPLACE: {
    HOSTINGS: {
      PATH: '/workplace/hostings',
      NAME: 'workplace/hostings',
    },
    HOSTING: {
      PATH: '/workplace/hostings/:id',
      NAME: 'workplace/hostings/:id',
    },
    SETTINGS: {
      PATH: '/workplace/settings',
      NAME: 'workplace/settings',
    },
  },
  USER: {
    PROFILE: {
      PATH: '/user/profile',
      NAME: 'user/profile',
    },
    SETTINGS: {
      PATH: '/user/settings',
      NAME: 'user/settings',
    },
  },
} as const
