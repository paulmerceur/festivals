<template>
    <div class="list">
        <ListItem v-if="listHeader!=undefined" :item="listHeader" :type="type" :isHeader=true></ListItem>
        <ListItem v-for="item in items" :key="item.id" :item="item" :type="'jeu'"></ListItem>
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
    name: 'SearchableList',
    components: {
        ListItem
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        listHeader: {
            type: Object,
            required: false
        }
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