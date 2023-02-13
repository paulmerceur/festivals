<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{jeu.nom}}</h1>
        <h2 class="type">Type de jeu: {{jeu.type}}</h2>
        <h3 class="benevoles">Liste des bénévoles</h3>
        <div class="list">
            <ListItem :item="listHeader" :type="'benevole'" :isHeader=true></ListItem>
            <ListItem v-for="benevole in benevoles" :key="benevole.id" :item="benevole" :type="'benevole'"></ListItem>
        </div>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'JeuView',
    components: {
        ListItem,
        PageHeader
    },
    data() { return {
        benevoles: [],
        listHeader: {prenom: "Prénom", nom: "Nom", email: "Email", creneau: "Créneau"},
        currentJeuId: "",
        jeu: {}
    }},
    methods: {
        getBenevoles: async function() {
            await fetch(this.$root.base_url + "benevoles/zone/" + this.jeu.zone.id ).then(res => res.json()).then(data => {
                this.benevoles = data;
                if (this.benevoles[0].benevoles) {
                    this.benevoles.forEach(benevole => {
                        benevole.id = benevole.benevoles.id;
                        benevole.prenom = benevole.benevoles.prenom;
                        benevole.nom = benevole.benevoles.nom;
                        benevole.email = benevole.benevoles.email;
                        delete benevole.benevoles;
                    });
                }
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

    .page {
        width: 100%;
        text-align: center;
    }

    .nom {
        margin-top: 10px;
    }

    .type {
        margin-top: 10px;
    }

    .benevoles {
        margin-top: 50px;
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