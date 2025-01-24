import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'
import { useAppStore } from '@/stores/app.store'
import { ROUTES } from '@/constants/routes.constant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const appStore = useAppStore()

  if (!appStore.isLogin && to.path !== ROUTES.AUTH.LOGIN.PATH) {
    return { name: ROUTES.AUTH.LOGIN.NAME }
  }

})

export default router
