import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {userId: 'defaultUser', password: 'password', name: 'defaultUser', address: 'Seoul', src: 'http://aaa.com'},
    ]
  },
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
