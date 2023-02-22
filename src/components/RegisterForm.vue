<template>
    <div class="page">
        <form class="form" @submit.prevent="register">
            <h1>Inscription</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <div>
                <button class="basic-button submit" type="submit">S'inscrire</button>
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
    name: 'RegisterForm',
    data() { return {
        email: "",
        password: "",
        error: ""
    } },
    methods: {
        ...mapActions(['register']),
        register: async function() {
            if (!this.checkEmail()) {
                this.error = "L'adresse email n'est pas valide";
                return;
            } else if (!this.checkPassword()) {
                this.error = "Le mot de passe doit contenir au moins 8 caractères";
                return;
            }
            try {
                this.$store.dispatch('register', {
                email: this.email,
                password: this.password,
                });
                // Redirect the user to the home page on successful login
                this.$router.push('/');
            } catch (error) {
                this.error = error.response.data.error;
            }
        },
        checkEmail: function() {
            return this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        },
        checkPassword: function() {
            return this.password.length >= 8;
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