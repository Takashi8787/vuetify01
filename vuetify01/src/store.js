import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskInfos: [],
    boardInfos: [],
    idNum: 0,
    drawer: false,
    storeTodos: ['aaa','bbbb'],
    count:12,
  },
  mutations: {
    addBoardInfos(state, boardInfo ){
      console.log("boardInfoのデータ");
      console.log(boardInfo);
      console.log("stateのデータ");
      console.log(state);

      // id,isDoneプロパティを追加
      boardInfo.id = state.idNum;
      boardInfo.isDone = false;
      // store stateのtaskInfosにデータをプッシュ
      state.boardInfos.push(boardInfo)
      // idの数値をインクリメント
      state.idNum++;
    },
    // addTaskInfos(state, taskinfo ){
    //   // id,isDoneプロパティを追加
    //   taskinfo.id = state.idNum;
    //   taskinfo.isDone = false;
    //   // store stateのtaskInfosにデータをプッシュ
    //   state.taskInfos.push(taskinfo)
    //   // idの数値をインクリメント
    //   state.idNum++;
    // },
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
    addBoardInfos({ commit } , boardInfo ) {
      commit('addBoardInfos' , boardInfo )
    },
    // addTaskInfos({ commit } , taskinfo ) {
    //   commit('addTaskInfos' , taskinfo )
    // },
  }
})
