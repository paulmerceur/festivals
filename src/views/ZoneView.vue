<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{zone.nom}}</h1>
        <SearchableList :items="jeux" :type="'jeu-par-zone'" :listHeader="jeuxHeader" :title="'Liste des jeux'"></SearchableList>
        <SearchableList :items="benevoles" :type="'benevole-creneau'" :listHeader="benevolesHeader" :title="'Liste des bénévoles'"></SearchableList>
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
        benevoles: [],
        jeuxHeader: {nom: "Nom", type: "Type"},
        benevolesHeader: {prenom: "Prénom", nom: "Nom", email: "Email", creneau: "Créneau"},
        currentZoneId: "",
        zone: {}
    }},
    methods: {
        getZone: async function() {
            await fetch(this.$root.base_url + "zones/" + this.currentZoneId).then(res => res.json()).then(data => {
                this.zone = data;
                this.getJeux();
                this.getBenevoles();
            });
        },
        getJeux: async function() {
            await fetch(this.$root.base_url + "jeux/zone/" + this.currentZoneId ).then(res => res.json()).then(data => {
                this.jeux = data;
            });
        },
        getBenevoles: async function() {
            await fetch(this.$root.base_url + "creneaux/zone/" + this.currentZoneId ).then(res => res.json()).then(data => {
                this.benevoles = data;
                if (this.benevoles.length != 0) {
                    this.benevoles.forEach(benevole => {
                        benevole.id = benevole.benevole.id;
                        benevole.prenom = benevole.benevole.prenom;
                        benevole.nom = benevole.benevole.nom;
                        benevole.email = benevole.benevole.email;
                        delete benevole.benevole;
                    });
                }
            });
        }
    },
    mounted() {
        this.currentZoneId = this.$router.currentRoute._value.params.id;
        this.getZone();
    }
}
</script>
