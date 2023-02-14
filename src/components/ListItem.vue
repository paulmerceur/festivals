<template>
    <div class="list-item" :class="{ header: isHeader }">
        <div v-for="(value, key) in displayedItem" :key="key" :style="{ width: childItemWidth }">
            {{ value }}
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
    },
    data() { return {
        displayedItem: {}
    } },
    computed: {
        childItemWidth() {
            const propCount = Object.keys(this.displayedItem).filter(key => this.displayedItem[key] !== undefined).length;
            return 100/propCount + '%';
        }
    },
    methods: {
        getDisplayedItem() {
            switch(this.type) {
                case 'jeu':
                    this.displayedItem = {
                        nom: this.item.nom,
                        type: this.item.type,
                        zone: this.item.zone.nom,
                        creneau: this.item.creneau
                    }
                    break;
                case 'benevole':
                    this.displayedItem = {
                        prenom: this.item.prenom,
                        nom: this.item.nom,
                        email: this.item.email,
                        creneau: this.item.creneau
                    }
                    break;
            }
            Object.keys(this.displayedItem).forEach(key => this.displayedItem[key] === undefined ? delete this.displayedItem[key] : {});
        }
    },
    created() {
        this.getDisplayedItem();
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

.list-item > * {
    text-align: left;
}

.header {
    background-color: var(--gray);
    font-weight: bold;
    cursor: default;
}
</style>