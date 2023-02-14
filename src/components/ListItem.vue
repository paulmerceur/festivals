<template>
    <div v-if="type==='jeu' " class="list-item jeu" :class="{ header: isHeader }">
        <div class="list-item__title">
            {{item.nom}}
        </div>
        <div class="list-item__type">
            {{item.type}}
        </div>
        <div class="list-item__zone">
            {{item.zone.nom}}
        </div>
    </div>
    <div v-else-if="type==='benevole' " class="list-item benevole" :class="{ header: isHeader }">
        <div class="list-item__prenom">
            {{item.prenom}}
        </div>
        <div class="list-item__nom">
            {{item.nom}}
        </div>
        <div class="list-item__email">
            {{item.email}}
        </div>
        <div class="list-item__creneau">
            {{item.creneau}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        item: Object,
        type: String,
        isHeader: Boolean
    }
}
</script>

<style>
.list-item {
    width: 80%;
    max-width: 1200px;
    background-color: var(--light-gray);
    border-radius: 5px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    margin: 10px 0;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
}
/* All elements inside list-item take 33.3% width */
.jeu > * {
    width: 33.3%;
    text-align: left;
}

.benevole > * {
    width: 25%;
    text-align: left;
}
.header {
    background-color: var(--gray);
    font-weight: bold;
    cursor: default;
}
</style>