<template>
    <div class="body">
        <div id="header">
            <div id="logout">
                <button class="basic-button" @click="logout">Déconnexion</button>
            </div>
            <div @click="goHome" id="logo">
                <img src="../assets/logo.png" alt="App logo" />
            </div>
            <div id="tabMenu">
                <button class="tab" :class="{activeTab: this.currentRoute == 'ListeJeux'}" @click="goToListeJeux">
                    Jeux
                </button>
                <button class="tab" :class="{activeTab: this.currentRoute == 'ListeBenevoles'}" @click="goToListeBenevoles">
                    Bénévoles
                </button>
                <button class="tab" :class="{activeTab: this.currentRoute == 'ListeZones'}" @click="goToListeZones">
                    Zones
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'PageHeader',
    methods: {
        ...mapActions(['logout']),
        logout: async function() {
            this.$store.dispatch('logout');
            this.$router.push('/');
        },
        goHome() {
            this.$router.push('/home');
        },
        goToListeJeux() {
            this.$router.push('/jeux');
        },
        goToListeBenevoles() {
            this.$router.push('/benevoles');
        },
        goToListeZones() {
            this.$router.push('/zones');
        }
    },
    computed: {
        currentRoute() {
            return this.$router.currentRoute._value.name;
        }
    }
}
</script>

<style>
#header {
    width: 80%;
    max-width: 1200px;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo {
    width: 100px;
    height: 100px;
    margin: 40px auto;
    cursor: pointer;
}

#logo img {
    width: 100%;
}

#tabMenu {
    width: 100%;
    text-align: center;
}

.tab {
    /* same idea as the ListItems, rectangles with rounded corners */
    width: 150px;
    height: 40px;
    background-color: var(--secondary);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2em;
    margin: 1em;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
}
.tab:hover {
    background-color: var(--tertiary);
}
.tab > *:link {
    text-decoration: none;
}

.activeTab {
    background-color: var(--tertiary);
}
</style>