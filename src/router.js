import { createWebHistory, createRouter } from "vue-router";
import ListeJeux from "@/views/ListeJeux.vue";
import JeuView from "@/views/JeuView.vue";

const routes = [
  { 
    name: 'ListeJeux',
    path: '/', 
    component: ListeJeux,
  },
  {
    name: 'JeuView',
    path: '/jeu/:id',
    component: JeuView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;