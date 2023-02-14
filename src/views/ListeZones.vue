<template>
    <div class="page">
        <PageHeader></PageHeader>
        <div class="list">
            <ListItem v-for="zone in zones" :key="zone.id" :item="zone" :type="'zone'" @click="goToZoneView(zone.id)"></ListItem>
        </div>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'ListeZones',
    components: {
        ListItem,
        PageHeader
    },
    data() { return {
        zones: []
    }},
    methods: {
        getZones: async function() {
            await fetch(this.$root.base_url + "zones/").then(res => res.json()).then(data => {
                this.zones = data;
                console.log(this.zones)
            });
        },
        goToZoneView(id) {
            localStorage.setItem('currentZoneId', id);
            this.$router.push('zone/' + id);
        }
    },
    mounted() {
        this.getZones();
    }
}
</script>

<style>
.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
