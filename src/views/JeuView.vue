<template>
    <div class="page">
        <div class="logo">
            <img src="../assets/logo.png" alt="App logo" />
        </div>
        <h1 class="nom">{{jeu.nom}}</h1>
        <h2 class="type">Type de jeu: {{jeu.type}}</h2>
        <h3 class="benevoles">Liste des bénévoles</h3>
        <div class="list">
            <ListItem :item="listHeader" :type="'benevole'" :isHeader=true></ListItem>
            <ListItem v-for="benevole in benevoles" :key="benevole.benevoles.id" :item="benevole" :type="'benevole'"></ListItem>
        </div>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
    name: 'JeuView',
    components: {
        ListItem
    },
    data() { return {
        benevoles: [],
        listHeader: {benevoles: {prenom: "Prénom", nom: "Nom", email: "Email"}, creneau: "Créneau"},
        currentJeuId: "",
        jeu: {}
    }},
    methods: {
        getBenevoles: async function() {
            await fetch(this.$root.base_url + "benevoles/zone/" + this.jeu.zone ).then(res => res.json()).then(data => {
                this.benevoles = data;
            });
        },
        getJeu: async function() {
            await fetch(this.$root.base_url + "jeux/" + this.currentJeuId).then(res => res.json()).then(data => {
                this.jeu = data[0];
                this.getBenevoles();
            });
        },
    },
    mounted() {
        this.currentJeuId = localStorage.getItem('currentJeuId');
        this.getJeu();
        
    }
}
</script>

<style>

    .nom {
        text-align: center;
        margin-top: 10px;
    }

    .type {
        text-align: center;
        margin-top: 10px;
    }

    .benevoles {
        margin-top: 20px;
        margin-left: 160px;
    }

    .home {
        text-align: center;
        margin-top: 60px;
    }

    .logo {
        width: 100px;
        height: 100px;
        margin: 40px auto;
    }

    .logo img {
        width: 100%;
    }
</style>