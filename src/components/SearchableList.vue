<template>
    <div class="page list-component">
        <!--title-->
        <h1 v-if="title">{{ title }}</h1>
        <input v-if="!emptyList" type="text" id="search-bar" v-model="searchBar" placeholder="Rechercher...">
        <button v-if="canCreateThisType" @click="goToCreationPage" class="basic-button">Ajouter un  {{ textButton }} </button>
        <div v-if="!emptyList" class="list">
            <ListItem v-if="listHeader!=undefined && filteredList()" :item="listHeader" :type="type" :isHeader=true></ListItem>
            <ListItem v-for="item in filteredList()" :key="item.id" :item="item" :type="type"></ListItem>
            <div class="error" v-if="unsuccesfullSearch">
                <p>Aucun resultat de correspond a votre recherche</p>
            </div>
        </div>
        <div v-else class="empty-list">
            <p>Aucun {{ textButton }}</p>
        </div>
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
            required: false,
            default: undefined
        },
        title: {
            type: String,
            required: false
        }
    },
    data() { return {
        searchBar: ""
    }},
    methods: {
        filteredList: function() {
            if (this.searchBar) {
                let filteredList = [];
                for (let item of this.items) {
                    for (let key in item) {
                        if (item[key].toString().toLowerCase().includes(this.searchBar.toLowerCase())) {
                            filteredList.push(item);
                            break;
                        }
                    }
                }
                return filteredList;
            }
            return this.items;
        },
        goToCreationPage: function() {
            if (this.type == 'benevole-creneau') {
                this.$router.push({ path: this.$route.params.id + '/add-benevole' });
                return;
            }
            this.$router.push({ path: 'create-' + this.type });
        }
    },
    computed: {
        unsuccesfullSearch: function() {
            return this.searchBar != "" && Object.keys(this.filteredList()).length == 0;
        },
        emptyList: function() {
            return Object.keys(this.items).length == 0;
        },
        canCreateThisType: function() {
            return this.type == 'jeu' || this.type == 'benevole' || this.type == 'benevole-creneau';
        },
        textButton: function() {
            switch(this.type) {
                case 'jeu':
                    return 'jeu';
                case 'benevole':
                    return 'bénévole';
                case 'benevole-creneau':
                    return 'bénévole';
                default:
                    return '';
            }
        }
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    margin-bottom: 20px;
}
.list-component {
    margin-top: 100px;
}

.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#search-bar {
  display: block;
  width: 350px;
  margin: 5px auto;
  padding: 10px 45px;
  background: white url("../assets/search-icon.png") no-repeat 15px center;
  background-size: 15px 15px;
  background-color: var(--secondary);
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


.error, .empty-list {
    padding: 10px;
}
.error {
    background-color: tomato;
    border-radius: 5px;
}
.empty-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.empty-list > * {
    background-color: var(--secondary);
    border-radius: 5px;
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    width: 60%;
    max-width: 800px;
}
</style>