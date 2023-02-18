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
        document.title = "GameFest";
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
@import url('../public/style.css');

* {
    font-family: var(--font-family), sans-serif;
    color: black;
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: var(--primary);
}

.basic-button {
    margin: 20px;
    padding: 10px 20px;
    background-color: var(--secondary);
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
}
</style>
