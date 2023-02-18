<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{jeu.nom}}</h1>
        <h2 class="type">Type de jeu: {{jeu.type}}</h2>
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
                this.jeu = data[0];
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