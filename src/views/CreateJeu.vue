<template>
    <PageHeader></PageHeader>
    <div class="page">
        <h1>Créer un jeu</h1>
        <div class="form">
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="nom" placeholder="Nom du jeu">
            </div>
            <div class="form-group">
                <label for="type">Type</label>
                <input type="text" class="form-control" id="type" v-model="type" placeholder="Type du jeu">
            </div>
            <div class="form-group">
                <label for="zone">Zone</label>
                <input type="number" class="form-control" id="zone" v-model="zone" placeholder="Zone du jeu">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" v-model="description" placeholder="Description du jeu">
            </div>
            <button @click="createJeu" class="basic-button">Valider</button>
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'

export default {
    name: 'CreateBenevole',
    components: {
        PageHeader
    },
    data() {
        return {
            nom: '',
            type: '',
            description: '',
            zone: ''
        }
    },
    methods: {
        createJeu: async function() {
            const response = await fetch(this.$root.base_url + 'jeux', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nom: this.nom,
                    type: this.type,
                    description: this.description,
                    zone: Number(this.zone)
                })
            })
            if (response.ok) {
                const data = await response.json()
                const id = data.id
                this.$router.push('/jeux/' + id)
            } else {
                console.log('error')
            }
        }
    }
}
</script>