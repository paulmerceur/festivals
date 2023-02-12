<template>
    <div class="list">
        <ListItem :jeu="listHeader" :isHeader=true></ListItem>
        <ListItem v-for="jeu in jeux" :key="jeu.id" :jeu="jeu"></ListItem>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
    name: 'ListeJeux',
    data() { return {
        listHeader: {nom: "Nom", type: "Type", zone: {nom: "Zone"}}
    }},
    props: {
        jeux: Array,
    },
    components: {
        ListItem
    }
}
</script>

<style>
.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>