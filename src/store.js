import { createStore } from 'vuex'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
    // baseURL: 'https://festivals-api.onrender.com/'
})

export default createStore({
    state: {
        user: null,
        token: null,
        isAdmin: false,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        SET_TOKEN(state, token) {
            state.token = token
        },
        CLEAR_USER(state) {
            state.user = null
        },
        CLEAR_TOKEN(state) {
            state.token = null
        },
        SET_ADMIN(state, isAdmin) {
            state.isAdmin = isAdmin
        }
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const response = await instance.post('auth/login', { email, password })
                const { session, user } = response.data
                commit('SET_USER', user)
                commit('SET_TOKEN', session)
                
                if (user.role === 'admin') {
                    commit('SET_ADMIN', true)
                }
            } catch (error) {
                console.error(error)
                throw error
            }

        },
        async register({ commit }, { email, password }) {
            try {
                const response = await instance.post('auth/register', { email, password })
                const { user, token } = response.data
                commit('SET_USER', user)
                commit('SET_TOKEN', token)
            } catch (error) {
                console.error(error)
                throw error
            }
        },
        async logout({ commit }) {
            try {
                await instance.post('/logout')
                commit('CLEAR_USER')
                commit('CLEAR_TOKEN')
                commit('SET_ADMIN', false)
            } catch (error) {
                console.error(error)
                throw error
            }
        },
    },
    getters: {
        isAuthenticated: state => !!state.token,
        user: state => state.user,
        token: state => state.token,
        isAdmin: state => state.isAdmin
    },
})
