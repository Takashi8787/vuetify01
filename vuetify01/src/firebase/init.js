import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAhdF4kzkGUTXGUybgsjDd9c4YMdC209M4",
authDomain: "taskapp-6ee83.firebaseapp.com",
databaseURL: "https://taskapp-6ee83.firebaseio.com",
projectId: "taskapp-6ee83",
storageBucket: "taskapp-6ee83.appspot.com",
messagingSenderId: "404597281820",
appId: "1:404597281820:web:98d5896675bda9f6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


// export firestore database
export default firebaseApp.firestore()
