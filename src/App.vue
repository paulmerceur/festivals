<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',
    data() { return {
        base_url: this.$store.getters.base_url
    }},
    created() {
        document.title = "GameFest";
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
@import url('../public/style.css');
</style>
