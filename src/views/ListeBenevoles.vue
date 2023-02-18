<template>
    <div class="page">
        <PageHeader></PageHeader>
        <SearchableList :items="benevoles" :type="'benevole'" :listHeader="listHeader"></SearchableList>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import SearchableList from '@/components/SearchableList.vue';
export default {
    name: 'ListeBenevoles',
    components: {
    PageHeader,
    SearchableList
},
    data() { return {
        benevoles: [],
        listHeader: {prenom: "Prénom", nom: "Nom", email: "Email"}
    }},
    methods: {
        getBenevoles: async function() {
            await fetch(this.$root.base_url + "benevoles/").then(res => res.json()).then(data => {
                this.benevoles = data;
            });
        }
    },
    mounted() {
        this.getBenevoles();
    }
}
</script>