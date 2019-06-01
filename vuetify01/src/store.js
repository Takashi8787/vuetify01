import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskInfos: [],
    idNum: 0,
    drawer: false,
    storeTodos: ['aaa','bbbb'],
    count:12,
  },
  mutations: {
    addTaskInfos(state, taskinfo ){
      // id,isDoneプロパティを追加
      taskinfo.id = state.idNum;
      taskinfo.isDone = false;
      // store stateのtaskInfosにデータをプッシュ
      state.taskInfos.push(taskinfo)
      // idの数値をインクリメント
      state.idNum++;
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addStoreTodos (storeTodos) {
      console.log("ストア09実行しました");
      // console.log("adddata");
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
    addTaskInfos({ commit } , taskinfo ) {
      commit('addTaskInfos' , taskinfo )
    },
  }
})
