<template>
    <PageHeader></PageHeader>
    <div class="page">
        <h1>Modifier un jeu</h1>
        <div class="form">
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="nom" placeholder="Nom du jeu">
            </div>
            <div class="form-group">
                <label for="type">Type</label>
                <select class="form-control" id="type" v-model="type">
                    <option v-for="type in types" :value="type" :key="type">{{type}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="zone">Zone</label>
                <select class="form-control" id="zone" v-model="zone">
                    <option v-for="zone in zones" :value="zone.id" :key="zone.id">{{zone.nom}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" v-model="description" placeholder="Description du jeu">
            </div>
            <div class="buttons">
                <button @click="goBack" class="basic-button">Annuler</button>
                <button @click="modifyJeu" class="basic-button">Valider</button>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'

export default {
    name: 'ModifyJeu',
    components: {
        PageHeader
    },
    data() {
        return {
            currentJeuId: "",
            zones: [],
            types: [],
            nom: '',
            type: '',
            zone: ''
        }
    },
    methods: {
        goBack: function() {
            this.$router.push('/jeux/' + this.currentJeuId)
        },
        getJeu: async function() {
            await fetch(this.$root.base_url + 'jeux/' + this.currentJeuId)
                .then(response => response.json()).then(data => {
                    this.nom = data.nom
                    this.type = data.type
                    this.description = data.description
                    this.zone = data.zone.id
                })
        },
        modifyJeu: async function() {
            const response = await fetch(this.$root.base_url + 'jeux/' + this.currentJeuId, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nom: this.nom,
                    type: this.type,
                    description: this.description,
                    zone: Number(this.zone)
                })
            })
            if (response.ok) {
                this.$router.push('/jeux/' + this.currentJeuId)
            } else {
                console.log('error')
            }
        },
        getZones: async function() {
            await fetch(this.$root.base_url + "zones/").then(res => res.json()).then(data => {
                this.zones = data;
            });
        },
        getTypes: async function() {
           this.types = ["enfant", "initié", "famille", "expert", "ambiance"];
        }
    },
    created() {
        this.currentJeuId = this.$router.currentRoute._value.params.id
        this.getJeu()
        this.getZones();
        this.getTypes();
    },
}
</script>