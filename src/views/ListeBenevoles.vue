<template>
    <div class="page">
        <PageHeader></PageHeader>
        <div class="list">
            <ListItem :item="listHeader" :type="'benevole'" :isHeader=true></ListItem>
            <ListItem v-for="benevole in benevoles" :key="benevole.id" :item="benevole" :type="'benevole'" @click="goToBenevoleView(benevole.id)"></ListItem>
        </div>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'ListeBenevoles',
    components: {
        ListItem,
        PageHeader
    },
    data() { return {
        benevoles: [],
        listHeader: {prenom: "Nom", nom: "Type", email: "Zone"}
    }},
    methods: {
        getBenevoles: async function() {
            await fetch(this.$root.base_url + "benevoles/").then(res => res.json()).then(data => {
                this.benevoles = data;
            });
        },
        goToBenevoleView(id) {
            localStorage.setItem('currentBenevoleId', id);
            this.$router.push('benevole/' + id);
        }
    },
    mounted() {
        this.getBenevoles();
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