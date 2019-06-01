import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    storeTodos: ['aaa','bbbb'],
    count:12,
  },
  mutations: {
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addStoreTodos (storeTodos) {
      console.log("ストア09実行しました");
      // console.log("adddata");
      console.log("adddata実行しました02");
      console.log(storeTodos);
    },
    increment(state){
      state.count++
    },
  },
  actions: {
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    addStoreTodos({ commit }) {
      commit('addStoreTodos')
    },
  }
})
