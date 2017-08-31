import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBFS3xZLEjOBOlW9RudLbScoqSPjXQkhpQ',
  authDomain: 'wgwheretogo.firebaseapp.com',
  databaseURL: 'https://wgwheretogo.firebaseio.com',
  projectId: 'wgwheretogo',
  storageBucket: 'wgwheretogo.appspot.com',
  messagingSenderId: '369386805312',
})

global.firebase = firebaseApp

export default firebaseApp