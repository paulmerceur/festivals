<template>
    <div class="page">
        <PageHeader></PageHeader>
        <div class="list">
            <ListItem :item="listHeader" :type="'jeu'" :isHeader=true></ListItem>
            <ListItem v-for="jeu in jeux" :key="jeu.id" :item="jeu" :type="'jeu'"></ListItem>
        </div>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'ListeJeux',
    components: {
        ListItem,
        PageHeader
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
        }
    },
    mounted() {
        this.getJeux();
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