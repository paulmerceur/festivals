<template>
    <div class="page">
        <form class="form" @submit.prevent="login">
            <h1>Connexion</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <div>
                <button class="basic-button submit" type="submit">Se connecter</button>
            </div>
            <div v-if="error">
                {{ error }}
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() { return {
        email: "",
        password: "",
        error: ""
    } },
    methods: {
        login: async function() {
            const { data, error } = await this.$store.dispatch('login', {email: this.email, password: this.password});
            if (error) {
                console.log(error);
                this.error = "L'adresse email ou le mot de passe est incorrect";
            } else {
                console.log(data);
                this.$router.push({name: '/home'});
            }
        }
    }
}
</script>

<style scoped>
.form {
    margin-top: 200px;
    margin-bottom: 50px;
    background-color: var(--secondary);
    padding: 20px;
    border-radius: 10px;
    width: 400px;
}

.submit {
    background-color: var(--tertiary);
}
</style>