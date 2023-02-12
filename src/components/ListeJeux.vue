<template>
    <div class="list">
        <div v-for="(jeu, id) in jeux" :key="id"></div>
    </div>
</template>

<script>
export default {
    name: 'ListeJeux',
    props: {
        jeux: Array,
    }
}
</script>

<style>

</style>