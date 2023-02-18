<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{zone.nom}}</h1>
        <h3 class="jeux">Liste des jeux</h3>
        <SearchableList :items="jeux" :type="'jeu-par-zone'" :listHeader="listHeader"></SearchableList>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import SearchableList from '@/components/SearchableList.vue';
export default {
    name: 'ZoneView',
    components: {
    PageHeader,
    SearchableList
},
    data() { return {
        jeux: [],
        listHeader: {nom: "Nom", type: "Type"},
        currentZoneId: "",
        zone: {}
    }},
    methods: {
        getJeux: async function() {
            await fetch(this.$root.base_url + "jeux/zone/" + this.zone.id ).then(res => res.json()).then(data => {
                this.jeux = data;
            });
        },
        getZone: async function() {
            await fetch(this.$root.base_url + "zones/" + this.currentZoneId).then(res => res.json()).then(data => {
                this.zone = data[0];
                this.getJeux();
            });
        },
    },
    mounted() {
        this.currentZoneId = this.$router.currentRoute._value.params.id;
        this.getZone();
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

    .jeux {
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
