import router from "@/router";

import { createPinia } from "pinia";

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = router
})

export default pinia