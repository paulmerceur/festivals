<template>
    <div class="page">
        <div class="logo">
            <img src="../assets/logo.png" alt="App logo" />
        </div>
        <div class="list">
            <ListItem :item="listHeader" :type="'jeu'" :isHeader=true></ListItem>
            <ListItem v-for="jeu in jeux" :key="jeu.id" :item="jeu" :type="'jeu'" @click="goToJeuView(jeu.id)"></ListItem>
        </div>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
    name: 'ListeJeux',
    components: {
        ListItem
    },
    data() { return {
        jeux: [],
        listHeader: {nom: "Nom", type: "Type", zone: {nom: "Zone"}}
    }},
    methods: {
        getJeux: async function() {
            await fetch(this.$root.base_url + "jeux/").then(res => res.json()).then(data => {
                this.jeux = data;
            });
        },
        goToJeuView(id) {
            this.$router.push('jeu/' + id);
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

.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>