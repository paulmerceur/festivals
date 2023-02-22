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
import { mapActions } from 'vuex'

export default {
    name: 'LoginForm',
    data() { return {
        email: "",
        password: "",
        error: ""
    } },
    methods: {
        ...mapActions(['login']),
        login: async function() {
            try {
                await this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
                });
                // Redirect the user to the home page on successful login
                this.$router.push('/home');
            } catch (error) {
                this.error = error.response.data.error;
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