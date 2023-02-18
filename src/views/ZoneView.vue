<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{zone.nom}}</h1>
        <h3 class="jeux">Liste des jeux</h3>
        <SearchableList :items="jeux" :type="'jeu-par-zone'" :listHeader="jeuxHeader"></SearchableList>
        <h3 class="benevoles">Liste des bénévoles</h3>
        <SearchableList :items="benevoles" :type="'benevole-par-zone'" :listHeader="benevolesHeader"></SearchableList>
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
            await fetch(this.$root.base_url + "benevoles/zone/" + this.currentZoneId ).then(res => res.json()).then(data => {
                this.benevoles = data;
                if (this.benevoles[0] != undefined) {
                    if (this.benevoles[0].benevoles != undefined) {
                        this.benevoles.forEach(benevole => {
                            benevole.id = benevole.benevoles.id;
                            benevole.prenom = benevole.benevoles.prenom;
                            benevole.nom = benevole.benevoles.nom;
                            benevole.email = benevole.benevoles.email;
                            delete benevole.benevoles;
                        });
                    }
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
