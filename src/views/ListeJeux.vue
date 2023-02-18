<template>
    <div class="page">
        <PageHeader></PageHeader>
        <SearchableList :items="jeux" :type="'jeu'" :listHeader="listHeader"></SearchableList>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import SearchableList from '@/components/SearchableList.vue';
export default {
    name: 'ListeJeux',
    components: {
        SearchableList,
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