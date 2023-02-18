<template>
    <PageHeader></PageHeader>
    <div class="page">
        <h1>Modifier un bénévole</h1>
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
            <div class="buttons">
                <button @click="goBack" class="basic-button">Annuler</button>
                <button @click="modifyBenevole" class="basic-button">Valider</button>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'

export default {
    name: 'ModifyBenevole',
    components: {
        PageHeader
    },
    data() {
        return {
            currentBenevoleId: "",
            prenom: '',
            nom: '',
            email: ''
        }
    },
    methods: {
        goBack: function() {
            this.$router.push('/benevoles/' + this.currentBenevoleId)
        },
        getBenevole: async function() {
            await fetch(this.$root.base_url + "benevoles/" + this.currentBenevoleId)
                .then(res => res.json()).then(data => {
                    this.prenom = data.prenom;
                    this.nom = data.nom;
                    this.email = data.email;
            });
        },
        modifyBenevole: async function() {
            const response = await fetch(this.$root.base_url + 'benevoles/' + this.currentBenevoleId, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prenom: this.prenom,
                    nom: this.nom,
                    email: this.email
                })
            })
            if (response.ok) {
                this.$router.push('/benevoles/' + this.currentBenevoleId)
            } else {
                console.log('error')
            }
        }
    },
    created() {
        this.currentBenevoleId = this.$router.currentRoute._value.params.id
        this.getBenevole()
    },
}
</script>