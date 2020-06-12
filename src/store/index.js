import Vue from 'vue'
import Vuex from 'vuex'
import {getTimeTableEvents} from '@/api/request'
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
    getTimeTable(){
      getTimeTableEvents().then(res => {
        console.log(res)
        res.map(item => {
          item.start = `${item.year}T${item.start}`;
        })
      })
    }
  },
  modules: {
  }
})

