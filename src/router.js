import { createWebHistory, createRouter } from "vue-router";

import store from "@/store.js";

import LoginPage from "@/views/LoginPage.vue";
import ListeJeux from "@/views/ListeJeux.vue";
import JeuView from "@/views/JeuView.vue";
import ListeBenevoles from "@/views/ListeBenevoles.vue";
import BenevoleView from "@/views/BenevoleView.vue";
import ListeZones from "@/views/ListeZones.vue";
import ZoneView from "@/views/ZoneView.vue";
import AddBenevoleZone from "@/views/AddBenevoleZone.vue";
import CreateJeu from "@/views/CreateJeu.vue";
import CreateBenevole from "@/views/CreateBenevole.vue";
import ModifyJeu from "@/views/ModifyJeu.vue";
import ModifyBenevole from "@/views/ModifyBenevole.vue";
import DisplayInfos from "@/views/DisplayInfos.vue";

const routes = [
    {
        name: 'LoginPage',
        path: '/',
        component: LoginPage,
    },
    { 
        name: 'ListeJeux',
        path: '/jeux',
        alias: '/home', 
        component: ListeJeux,
      },
    {
        name: 'JeuView',
        path: '/jeux/:id',
        component: JeuView,
    },
    {
        name: 'ListeBenevoles',
        path: '/benevoles',
        component: ListeBenevoles,
    },
    {
        name: 'BenevoleView',
        path: '/benevoles/:id',
        component: BenevoleView,
    },
    {
        name: 'ListeZones',
        path: '/zones',
        component: ListeZones,
    },
    {
        name: 'ZoneView',
        path: '/zones/:id',
        component: ZoneView,
    },
    {
        name: 'AddBenevoleZone',
        path: '/zones/:id/add-benevole',
        component: AddBenevoleZone,
    },
    {
        name: 'CreateJeu',
        path: '/create-jeu',
        component: CreateJeu,
    },
    {
        name: 'CreateBenevole',
        path: '/create-benevole',
        component: CreateBenevole,
    },
    {
        name: 'ModifyJeu',
        path: '/modify-jeu/:id',
        component: ModifyJeu,
    },
    {
        name: 'ModifyBenevole',
        path: '/modify-benevole/:id',
        component: ModifyBenevole,
    },
    {
        name: 'DisplayInfos',
        path: '/infos',
        component: DisplayInfos,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

// Global navigation guard (user needs to be logged in to access any page)
router.beforeEach((to, from, next) => {
    if (to.name !== 'LoginPage' && !store.state.token) next({ name: 'LoginPage' })
    else {
        next()
    }
})

export default router;