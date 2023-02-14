<template>
    <div v-if="type==='jeu' " class="list-item jeu" :class="{ header: isHeader }">
        <div>
            {{item.nom}}
        </div>
        <div>
            {{item.type}}
        </div>
        <div>
            {{item.zone.nom}}
        </div>
    </div>
    <div v-else-if="type==='benevole' " class="list-item benevole" :class="{ header: isHeader }">
        <div>
            {{item.prenom}}
        </div>
        <div>
            {{item.nom}}
        </div>
        <div>
            {{item.email}}
        </div>
        <div>
            {{item.creneau}}
        </div>
    </div>
    <div v-else-if="type==='zone' " class="list-item zone" :class="{ header: isHeader }">
        <div>
            {{item.nom}}
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

.jeu > * {
    width: 33.3%;
    text-align: left;
}
.benevole > * {
    width: 25%;
    text-align: left;
}
.zone > * {
    width: 100%;
    text-align: left;
}

.header {
    background-color: var(--gray);
    font-weight: bold;
    cursor: default;
}
</style>