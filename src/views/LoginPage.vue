<template>
    <div class="page">
        <LoginForm v-if="state === 'login'"></LoginForm>
        <RegisterForm v-else-if="state === 'register'"></RegisterForm>
        <button v-if="state === 'login'" @click="state = 'register'" class="basic-button"> Vous n'avez pas de compte ? Inscrivez-vous !</button>
        <button v-else-if="state === 'register'" @click="state = 'login'" class="basic-button"> Vous avez déjà un compte ? Connectez-vous !</button>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
    name: 'LoginPage',
    components: {
        LoginForm,
        RegisterForm
    },
    data() { return {
        state: 'login'
    } },
}
</script>