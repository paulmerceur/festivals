<template>
    <PageHeader></PageHeader>
    <div class="page">
        <h1>Créer un bénévole</h1>
        <div class="form">
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" id="nom" v-model="prenom" placeholder="Prénom">
            </div>
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" v-model="nom" placeholder="Nom">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" v-model="email" placeholder="Email">
            </div>
            <button @click="createBenevole" class="basic-button">Valider</button>
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
            prenom: '',
            nom: '',
            email: ''
        }
    },
    methods: {
        createBenevole: async function() {
            const response = await fetch(this.$root.base_url + 'benevoles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prenom: this.prenom,
                    nom: this.nom,
                    email: this.email
                })
            })
            if (response.ok) {
                const data = await response.json()
                const id = data.id
                this.$router.push('/benevoles/' + id)
            } else {
                console.log('error')
            }
        }
    }
}
</script>