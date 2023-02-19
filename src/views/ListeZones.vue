<template>
    <div class="page">
        <PageHeader></PageHeader>
        <img src="@/assets/carte_festival.png" class="image" alt="Carte du festival">
        <SearchableList :items="zones" :type="'zone'"></SearchableList>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import SearchableList from '@/components/SearchableList.vue';
export default {
    name: 'ListeZones',
    components: {
    PageHeader,
    SearchableList
},
    data() { return {
        zones: []
    }},
    methods: {
        getZones: async function() {
            await fetch(this.$root.base_url + "zones/").then(res => res.json()).then(data => {
                this.zones = data;
            });
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

.image {
  object-fit: cover;
}
</style>
