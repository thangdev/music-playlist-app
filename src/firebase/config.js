import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'muzix-vue.firebaseapp.com',
  projectId: 'muzix-vue',
  storageBucket: 'muzix-vue.appspot.com',
  messagingSenderId: '647239820766',
  appId: 'your-app-id',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
