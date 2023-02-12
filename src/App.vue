<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    data() { return {
        base_url: 'https://festivals-api.onrender.com/'
    }},
    created() {
        document.title = "Festival du Jeu";
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('../public/style.css');

* {
    font-family: var(--font-family), sans-serif;
    color: black;
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
</style>
