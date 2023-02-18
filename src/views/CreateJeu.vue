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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.form {
    margin: 0 auto;
    width: 50%;
}

.form-group {
    margin: 20px;
    text-align: left;
}

.form-control {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


</style>