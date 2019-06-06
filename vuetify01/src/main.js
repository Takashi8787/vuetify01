import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// これがストアを全体で使えるためのインポート
import store from './store'
// import firebase from 'firebase'
// import firebasestore from 'firebase/firestore'

Vue.config.productionTip = false

// firebaseのセットアップ
{/* <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script> */}

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyAy7ZgK4-WDg19KuQv1chC-L5glkmYHvdY",
//   authDomain: "udemy-b5a7a.firebaseapp.com",
//   databaseURL: "https://udemy-b5a7a.firebaseio.com",
//   projectId: "udemy-b5a7a",
//   storageBucket: "udemy-b5a7a.appspot.com",
//   messagingSenderId: "701623462104",
//   appId: "1:701623462104:web:702a0eee5b302869"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export default firebaseApp.firestore()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
