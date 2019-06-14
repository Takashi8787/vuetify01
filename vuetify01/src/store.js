import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase/init'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardInfos: [],
    listInfos: [],
    selectedBoardID: '',
    selectedListID: '',
    listNum: 0,
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
      this.listNum = 0
      // 取得先のDB名を指定
      console.log('selectedBoardID:',this.state.selectedBoardID)
      db.collection('board').doc(this.state.selectedBoardID).collection('listInfo').get()
      // db.collection('board').doc('4NpCVhVd1nooLK6SUAel').collection('listInfo').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let list = doc.data()
          list.id = doc.id
          // this.listNum = parseInt(this.listNum) + 1
          // console.log('store:listNum;', this.listNum)
          this.state.listInfos.push(list)
        })
      })       
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },

  },
  actions: {
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
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
