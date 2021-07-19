import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {userId: 'aaa', password: '123', name: 'aaa', address: 'Seoul', src: 'http://aaa.com'},
      {userId: 'bbb', password: '123', name: 'bbb', address: 'Seoul', src: 'http://bbb.com'},
      {userId: 'bbb', password: '123', name: 'bbb', address: 'Seoul', src: 'http://ccc.com'},
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
