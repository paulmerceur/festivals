import { createWebHistory, createRouter } from "vue-router";
import ListeJeux from "@/views/ListeJeux.vue";
import JeuView from "@/views/JeuView.vue";
import ListeBenevoles from "@/views/ListeBenevoles.vue";
import BenevoleView from "@/views/BenevoleView.vue";
import ListeZones from "@/views/ListeZones.vue";
import ZoneView from "@/views/ZoneView.vue";

const routes = [
    { 
        name: 'ListeJeux',
        path: '/',
        alias: '/jeux', 
        component: ListeJeux,
      },
    {
        name: 'JeuView',
        path: '/jeu/:id',
        component: JeuView,
    },
    {
        name: 'ListeBenevoles',
        path: '/benevoles',
        component: ListeBenevoles,
    },
    {
        name: 'BenevoleView',
        path: '/benevole/:id',
        component: BenevoleView,
    },
    {
        name: 'ListeZones',
        path: '/zones',
        component: ListeZones,
    },
    {
        name: 'ZoneView',
        path: '/zone/:id',
        component: ZoneView,
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;