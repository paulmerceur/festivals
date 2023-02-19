<template>
    <PageHeader></PageHeader>
    <div class="page">
        <h1>Ajouter un bénévole à {{zone.nom}}</h1>
        <div class="form">
            <div class="form-group">
                <label for="benevole">Bénévole</label>
                <input type="number" class="form-control" id="benevole" v-model="benevole" placeholder="Bénévole">
            </div>
            <div class="form-group">
                <label for="creneau">Créneau</label>
                <input type="text" class="form-control" id="creneau" v-model="creneau" placeholder="Créneau">
            </div>
            <!-- Error message -->
            <div class="error-message" v-if="errorMessage">
                {{errorMessage}}
            </div>
            <button @click="addBenevole" class="basic-button">Valider</button>
        </div>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'AddBenevoleZone',
    components: {
        PageHeader
    },
    data() {
        return {
            benevole: Number,
            creneau: "",
            zone: {},
            currentZoneId: "",
            errorMessage: ""
        }
    },
    methods: {
        getZone: async function() {
            await fetch(this.$root.base_url + "zones/" + this.currentZoneId).then(res => res.json()).then(data => {
                this.zone = data;
            });
        },
        addBenevole: async function() {
            this.errorMessage = ""
            const response = await fetch(this.$root.base_url + "creneaux", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    zone: this.currentZoneId,
                    benevole: this.benevole,
                    creneau: this.creneau
                })
            })
            if (response.ok) {
                this.$router.push('/zones/' + this.currentZoneId)
            } else {
                console.log('error')
                this.errorMessage = "Ce bénévole est déjà affecté à ce créneau"
            }
        }
    },
    mounted() {
        this.currentZoneId = this.$router.currentRoute._value.params.id;
        this.getZone();
    }
}
</script>

<style>
.error-message {
    color: red;
}
</style>