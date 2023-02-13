<template>
    <div>
        <div @click="goHome" class="logo">
            <img src="../assets/logo.png" alt="App logo" />
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
    }
}
</script>

<style>
.logo {
    width: 100px;
    height: 100px;
    margin: 40px auto;
    cursor: pointer;
}

.logo img {
    width: 100%;
}
</style>