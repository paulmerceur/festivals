import { createWebHistory, createRouter } from "vue-router";
import ListeJeux from "@/views/ListeJeux.vue";

const routes = [
  { 
    name: 'ListeJeux',
    path: '/', 
    component: ListeJeux,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;