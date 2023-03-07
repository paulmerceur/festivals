

<template>
    <div class="body">
        <div id="header">
            <div id="logo-date">
                <div id="logo" @click="goHome">
                    <img src="../../public/logo.png" alt="App logo" />
                </div>
                <div id="date">
                    <div id="start-date">13 > 16 août</div>
                </div>
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
                <button class="tab" :class="{activeTab: this.currentRoute == 'DisplayInfos'}" @click="goToInfos">
                    Infos
                </button>
                <button class="basic-button logout-button" @click="logout">Déconnexion</button>
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
        },
        goToInfos() {
            this.$router.push('/infos');
        }
    },
    computed: {
        currentRoute() {
            console.log(this.$router.currentRoute._value.name);
            return this.$router.currentRoute._value.name;
        }
    }
}
</script>

<style>
#header {
    width: 100%;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

#logo-date {
    display: flex;
    align-items: center;
}

#logo {
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin-right: 20px;
}

#logo img {
    width: 100%;
}

#date {
    font-size: 2em;
    font-weight: 700;
}

#start-date {
    margin-bottom: 5px;
}

.logout-button {
    width: 170px;
    height: 40px;
    background-color: var(--secondary);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2em;
    margin: 1em;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    color: red;
    font-family: inherit;
}

#logout {
    margin-left: auto;
    margin-top: 10px;
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