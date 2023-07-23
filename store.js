import { createStore } from 'vuex'

export default createStore({
  state: {
    userToken: localStorage.getItem('userToken') || '',
  },
  mutations: {
    SET_USER_TOKEN(state, token) {
      state.userToken = token
      localStorage.setItem('userToken', token)
    },
  },
})
