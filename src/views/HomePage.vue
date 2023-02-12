// Example
<template>
    <div class="page">
        <!-- Logo -->
        <div class="logo">
            <img src="../assets/logo.png" alt="App logo" />
        </div>
        <ListeJeux :jeux="this.notes"></ListeJeux>
    </div>
</template>

<script>
import ListeJeux from '../components/ListeJeux.vue'
export default {
    name: 'HomePage',
    components: {
        ListeJeux
    },
    data() { return {
        jeux: [],
        base_url: 'http://localhost:3000/'
    }},
    methods: {
        getJeux: async function() {
            await fetch(this.base_url + "jeux/").then(res => res.json()).then(data => {
                this.jeux = data;
            });
        }
    },
    mounted() {
        this.getJeux();
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