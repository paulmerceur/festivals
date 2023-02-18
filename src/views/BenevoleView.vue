<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{benevole.prenom}} {{benevole.nom}}</h1>
        <h2 class="email">{{benevole.email}}</h2>
        <h3 class="jeux">Liste des jeux</h3>
        <div class="list">
            <ListItem :item="listHeader" :type="'jeu'" :isHeader=true></ListItem>
            <ListItem v-for="jeu in jeux" :key="jeu.id" :item="jeu" :type="'jeu'"></ListItem>
        </div>
        <button class="basic-button" @click="goToModifyBenevole">Modifier</button>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import ListItem from '../components/ListItem.vue'
export default {
    name: 'BenevoleView',
    components: {
        ListItem,
        PageHeader
    },
    data() { return {
        currentBenevoleId: "",
        benevole: {},
        jeux: [],
        listHeader: {nom: "Nom", zone: {nom: "Zone"}, creneau: "Créneau"}
    }},
    methods: {
        getJeux: async function() {
            await fetch(this.$root.base_url + "jeux/benevole/" + this.currentBenevoleId ).then(res => res.json()).then(data => {
                this.jeux = data;
            });
        },
        getBenevole: async function() {
            await fetch(this.$root.base_url + "benevoles/" + this.currentBenevoleId).then(res => res.json()).then(data => {
                this.benevole = data;
                this.getJeux();
            });
        },
        goToModifyBenevole: function() {
            this.$router.push({path: '/modify-benevole/' + this.currentBenevoleId});
        }
    },
    mounted() {
        this.currentBenevoleId = this.$router.currentRoute._value.params.id;
        this.getBenevole();
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

    .email {
        margin-top: 10px;
    }

    .jeux {
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