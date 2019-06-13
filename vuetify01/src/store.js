import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/init'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardInfos: [],
    listInfos: [],
    selectedBoardID: '',
    selectedListID: '',
    messages: 'message!bystore',
    idNum: 0,
    drawer: false,
    storeTodos: ['aaa','bbbb'],
    count:12,
  },
  mutations: {
    getFirebaseData () {
      // 取得先のDB名を指定
      db.collection('board').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log( "muration実行：" ,doc.data())
          let board = doc.data()
          board.id = doc.id
          this.state.boardInfos.push(board)
        })
      })       
    },
    getListData () {
      this.state.listInfos = []
      // 取得先のDB名を指定
      console.log('selectedBoardID:',this.state.selectedBoardID)
      db.collection('board').doc(this.state.selectedBoardID).collection('listInfo').get()
      // db.collection('board').doc('4NpCVhVd1nooLK6SUAel').collection('listInfo').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let list = doc.data()
          list.id = doc.id
          this.state.listInfos.push(list)
        })
      })       
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },

  },
  actions: {
    getFirebaseData ({ commit }) {
      commit('getFirebaseData')
    },
    getListData ({ commit }) {
      commit('getListData')
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
  }
})
