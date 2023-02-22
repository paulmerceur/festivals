<template>
    <PageHeader></PageHeader>
    <div class="page">
        <h1>Ajouter un bénévole à {{zone.nom}}</h1>
        <div class="form">
            <div class="form-group">
                <label for="benevole">Bénévole</label>
                <select class="form-control" id="benevole" v-model="benevole">
                    <option value="" disabled selected>Select your option</option>
                    <option v-for="benevole in benevoles" :value="benevole.id" :key="benevole.id">{{benevole.nom}} {{benevole.prenom}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="creneau">Créneau</label>
                <select class="form-control" id="creneau" v-model="creneau">
                    <option v-for="creneau in creneaux" :value="creneau" :key="creneau">{{creneau}}</option>
                </select>

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
            //une liste de bénévoles
            benevoles: [],
            creneaux: [],
            benevole: Number,
            creneau: "",
            zone: {},
            currentZoneId: "",
            errorMessage: ""
        }
    },
    methods: {
        //récupère tous les bénévoles et les met dans la liste
        getBenevoles: async function() {
            await fetch(this.$root.base_url + "benevoles").then(res => res.json()).then(data => {
                this.benevoles = data;
            });
        },        
        getZone: async function() {
            await fetch(this.$root.base_url + "zones/" + this.currentZoneId).then(res => res.json()).then(data => {
                this.zone = data;
            });
        },
        getCreneaux: async function() {
           this.creneaux = [
                {id: 1, creneau: "8h-10h"},
                {id: 2, creneau: "10h-12h"},
                {id: 3, creneau: "12h-14h"},
                {id: 4, creneau: "14h-16h"},
                {id: 5, creneau: "16h-18h"},
                {id: 6, creneau: "18h-20h"},
                {id: 7, creneau: "20h-22h"},
                {id: 8, creneau: "22h-00h"}
            ]
            this.creneaux = this.creneaux.map(creneau => creneau.creneau)
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
        this.getBenevoles();
        this.getCreneaux();
    }
}
</script>

<style>
.error-message {
    color: red;
}
</style>