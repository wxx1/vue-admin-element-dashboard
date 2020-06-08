import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse:false //控制
  },
  mutations: {
    collapseChange(state){
      return state.collapse = ! state.collapse;
    }
  },
  actions: {
  },
  modules: {
  }
})
