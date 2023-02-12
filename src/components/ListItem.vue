<template>
    <div class="list-item" :class="{ header: isHeader }">
        <div class="list-item__title">
            {{jeu.nom}}
        </div>
        <div class="list-item__type">
            {{jeu.type}}
        </div>
        <div class="list-item__description">
            {{jeu.zone.nom}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        jeu: Object,
        isHeader: Boolean
    }
}
</script>

<style>
.list-item {
    width: 80%;
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
}
/* All elements inside list-item take 33.3% width */
.list-item > * {
    width: 33.3%;
}

.header {
    background-color: var(--gray);
    font-weight: bold;
}
</style>