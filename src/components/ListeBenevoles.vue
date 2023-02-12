<template>
    <div class="list">
        <ListItem :benevole="listHeader" :isHeader=true></ListItem>
        <ListItem v-for="benevole in benevoles" :key="benevole.id" :benevole="benevole"></ListItem>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
    name: 'ListeBenevoles',
    data() { return {
        listHeader: {nom: "Nom", type: "Type", zone: {nom: "Zone"}}
    }},
    props: {
        benevoles: Array,
    },
    components: {
        ListItem
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