import { createRouter, createWebHistory } from 'vue-router'
import page1 from '@/components/page1.vue'
import page2 from '@/components/page2.vue'
import page3 from '@/components/page3.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
redirect: '/page1'
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1,
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2,
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3,
    },
  ],
})

export default router
