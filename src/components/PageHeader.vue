<template>
    <div class="body">
        <div id="header">
            <div @click="goHome" id="logo">
                <img src="../assets/logo.png" alt="App logo" />
            </div>
            <div id="tabMenu">
                <button class="tab" :class="{activeTab: this.currentRoute == 'ListeJeux'}">
                    <router-link to="/jeux">Jeux</router-link>
                </button>
                <button class="tab" :class="{activeTab: this.currentRoute == 'ListeBenevoles'}">
                    <router-link to="/benevoles">Bénévoles</router-link>
                </button>
                <button class="tab" :class="{activeTab: this.currentRoute == 'ListeZones'}">
                    <router-link to="/zones">Zones</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    methods: {
        goHome() {
            this.$router.push('/');
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
    background-color: var(--light-gray);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.2em;
    margin: 1em;
}
.tab:hover {
    background-color: var(--gray);
}
.tab > *:link {
    text-decoration: none;
}

.activeTab {
    background-color: var(--gray);
}
</style>