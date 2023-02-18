<template>
    <input type="text" id="search-bar" v-model="searchBar" placeholder="Rechercher...">
    <div class="list">
        <ListItem v-if="listHeader!=undefined && filteredList()" :item="listHeader" :type="type" :isHeader=true></ListItem>
        <ListItem v-for="item in filteredList()" :key="item.id" :item="item" :type="type"></ListItem>
    </div>
    <div class="error" v-if="searchBar&&!filteredList()">
        <p>Aucun resultat de correcpond a votre recherche</p>
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

#search-bar {
  display: block;
  width: 350px;
  margin: 20px auto;
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

.error {
  background-color: tomato;
}
</style>