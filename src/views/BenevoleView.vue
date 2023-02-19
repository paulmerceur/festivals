<template>
    <div class="page">
        <PageHeader></PageHeader>
        <h1 class="nom">{{benevole.prenom}} {{benevole.nom}}</h1>
        <h2 class="email">{{benevole.email}}</h2>
        <SearchableList :items="activites" :type="'zone-creneau'" :listHeader="listHeader" :title="'Liste des activités'"></SearchableList>
        <div class="buttons">
            <button class="basic-button" @click="goToModifyBenevole">Modifier</button>
            <button class="basic-button" @click="deleteBenevole">Supprimer</button>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import SearchableList from '@/components/SearchableList.vue'
export default {
    name: 'BenevoleView',
    components: {
        SearchableList,
        PageHeader
    },
    data() { return {
        currentBenevoleId: "",
        benevole: {},
        activites: [],
        listHeader: {zone: "Zone", creneau: "Créneau"}
    }},
    methods: {
        getActivites: async function() {
            await fetch(this.$root.base_url + "creneaux/benevole/" + this.currentBenevoleId ).then(res => res.json()).then(data => {
                this.activites = data;
                if (this.activites.length != 0) {
                    this.activites.forEach(activite => {
                        activite.id = activite.zone.id;
                        activite.zone = activite.zone.nom;
                    });
                }
            });
        },
        getBenevole: async function() {
            await fetch(this.$root.base_url + "benevoles/" + this.currentBenevoleId).then(res => res.json()).then(data => {
                this.benevole = data;
                this.getActivites();
            });
        },
        goToModifyBenevole: function() {
            this.$router.push({path: '/modify-benevole/' + this.currentBenevoleId});
        },
        deleteBenevole: async function() {
            // TODO: Add a confirmation popup
            await fetch(this.$root.base_url + "benevoles/" + this.currentBenevoleId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status == 200) {
                    this.$router.push({path: '/benevoles'});
                }
            });
        }
    },
    mounted() {
        this.currentBenevoleId = this.$router.currentRoute._value.params.id;
        this.getBenevole();
    }
}
</script>