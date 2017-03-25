import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCuRWOK-iKlEPI6mqcZI8BuUxEHtY7nGp0",
  authDomain: "todo-app-cbb10.firebaseapp.com",
  databaseURL: "https://todo-app-cbb10.firebaseio.com",
  storageBucket: "todo-app-cbb10.appspot.com",
  messagingSenderId: "1080084981579"
}

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Synclair',
    age: 20
  }
}).then(() => {
  console.log('set worked!')
}, (e) => {
  console.log('set failed')
})


firebaseRef.child('user').set({
  name: 'Syn'
})

firebaseRef.child('app').set({
  name: 'Todo Application'
})
