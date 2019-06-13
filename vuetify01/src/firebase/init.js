import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAy7ZgK4-WDg19KuQv1chC-L5glkmYHvdY",
authDomain: "udemy-b5a7a.firebaseapp.com",
databaseURL: "https://udemy-b5a7a.firebaseio.com",
projectId: "udemy-b5a7a",
storageBucket: "udemy-b5a7a.appspot.com",
messagingSenderId: "701623462104",
appId: "1:701623462104:web:702a0eee5b302869"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


// export firestore database
export default firebaseApp.firestore()



