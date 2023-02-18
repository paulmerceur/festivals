<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{jeu.nom}}</h1>
        <h2 class="type">Type de jeu: {{jeu.type}}</h2>
        <h2 class="zone">Zone: {{jeu.zone}}</h2>
        <button class="basic-button" @click="goToModifyJeu">Modifier</button>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'JeuView',
    components: {
        PageHeader
    },
    data() { return {
        currentJeuId: "",
        jeu: {}
    }},
    methods: {
        getJeu: async function() {
            await fetch(this.$root.base_url + "jeux/" + this.currentJeuId).then(res => res.json()).then(data => {
                this.jeu = data;
                this.jeu.zone = data.zone.nom;
            });
        },
        goToModifyJeu: function() {
            this.$router.push({path: '/modify-jeu/' + this.currentJeuId});
        }
    },
    mounted() {
        this.currentJeuId = this.$router.currentRoute._value.params.id;
        this.getJeu();
    }
}
</script>

<style>
h1, h2 {
    margin-top: 10px;
}
</style>