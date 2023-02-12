<template>
    <div class="page">
        <div class="logo">
            <img src="../assets/logo.png" alt="App logo" />
        </div>
        <ListeBenevoles></ListeBenevoles>
    </div>
</template>

<script>
import ListeBenevoles from '../components/ListeBenevoles.vue'
export default {
    name: 'JeuView',
    components: {
        ListeBenevoles
    },
    data() { return {
    }},
    methods: {
    },
    mounted() {
    }
}
</script>

<style>
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