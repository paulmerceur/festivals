<template>
    <div class="list-item" :class="{ header: isHeader }" @click="goToItem">
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
        // Get the displayed item based on the type
        getDisplayedItem() {
            switch(this.type) {
                case 'jeu':
                    this.displayedItem = {
                        nom: this.item.nom,
                        type: this.item.type,
                        zone:  this.item.zone.nom
                    }
                    break;
                case 'benevole':
                    this.displayedItem = {
                        prenom: this.item.prenom,
                        nom: this.item.nom,
                        email: this.item.email
                    }
                    break;
                case 'benevole-creneau':
                    this.displayedItem = {
                        prenom: this.item.prenom,
                        nom: this.item.nom,
                        email: this.item.email,
                        creneau: this.item.creneau
                    }
                    break;
                case 'zone':
                    this.displayedItem = {
                        nom: this.item.nom
                    }
                    break;
                case 'zone-creneau':
                    this.displayedItem = {
                        zone: this.item.zone,
                        creneau: this.item.creneau
                    }
                    break;
                case 'jeu-par-zone':
                this.displayedItem = {
                        nom: this.item.nom,
                        type: this.item.type
                    }
                    break;
                default:
                    this.displayedItem = this.item;
            }

            // Capitalize the first letter of each property (except for email)
            Object.keys(this.displayedItem).forEach(key => {
                if (key !== 'email' && this.displayedItem[key] !== undefined) {
                    this.displayedItem[key] = this.displayedItem[key].charAt(0).toUpperCase() + this.displayedItem[key].slice(1);
                }
            });

            // Remove undefined properties
            Object.keys(this.displayedItem).forEach(key => this.displayedItem[key] === undefined ? delete this.displayedItem[key] : {});
            // Remove id if it exists
            if (this.displayedItem.id) {
                delete this.displayedItem.id;
            }
        },
        // Go to the item page
        goToItem() {
            const type = this.type === 'jeu' ? 'jeux' : this.type + 's';
            if (!this.isHeader) {
                if (this.type === 'benevole-creneau') {
                    this.$router.push({ path: '/benevoles/' + this.item.id });
                    return;
                } else if (this.type === 'zone-creneau') {
                    this.$router.push({ path: '/zones/' + this.item.id });
                    return;
                } else if (this.type === 'jeu-par-zone') {
                    this.$router.push({ path: '/jeux/' + this.item.id });
                    return;
                }
                this.$router.push({ path: '/' + type + '/' + this.item.id });
            }
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
    background-color: var(--secondary);
    border-radius: 5px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    margin: 5px 0;
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
    background-color: var(--tertiary);
    margin: 10px 0;
    font-weight: bold;
    cursor: default;
}
</style>