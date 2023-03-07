<template>
    <div class="game-page">
      <PageHeader></PageHeader>
      <div class="game-container">
        <h1 class="game-title">{{ jeu.nom }}</h1>
        <div class="game-info">
          <h2 class="game-type">Type de jeu: {{ jeu.type }}</h2>
          <h2 class="game-zone">Zone: {{ jeu.zone }}</h2>
        </div>
        <h2 class="game-description-title">Description</h2>
        <p class="game-description">{{ jeu.description }}</p>
        <div class="game-buttons">
          <button class="modify-button" @click="goToModifyJeu">Modifier</button>
          <button class="delete-button" @click="deleteJeu">Supprimer</button>
        </div>
      </div>
    </div>
  </template>

<script>
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'JeuView',
    components: {
        PageHeader
    },
    data() { return {
        currentJeuId: "",
        jeu: {}
    }},
    methods: {
        getJeu: async function() {
            await fetch(this.$root.base_url + "jeux/" + this.currentJeuId).then(res => res.json()).then(data => {
                this.jeu = data;
                this.jeu.zone = data.zone.nom;
            });
        },
        goToModifyJeu: function() {
            this.$router.push({path: '/modify-jeu/' + this.currentJeuId});
        },
        deleteJeu: async function() {
            // TODO: Add a confirmation popup
            await fetch(this.$root.base_url + "jeux/" + this.currentJeuId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status == 200) {
                    this.$router.push({path: '/jeux'});
                }
            });
        }
    },
    mounted() {
        this.currentJeuId = this.$router.currentRoute._value.params.id;
        this.getJeu();
    }
}
</script>

<style scoped>
.game-page {
  background-color: #f;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.game-container {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #aaa;
  margin-top: 50px;
  padding: 30px;
  width: 80%;
  max-width: 1000px;
}

.game-title {
  font-size: 36px;
  text-align: center;
}

.game-info {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.game-type,
.game-zone {
  font-size: 20px;
}

.game-description {
  font-size: 18px;
  margin-top: 20px;
  text-align: justify;
}

.game-buttons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.modify-button,
.delete-button {
  background-color: #007aff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  margin-right: 20px;
  padding: 10px 20px;
  transition: background-color 0.3s
}
</style>