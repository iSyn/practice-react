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
})

var notesRef = firebaseRef.child('notes')

notesRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val())
})

notesRef.on('child_changed', (snapshot) => {
  console.log('child changed', snapshot.key, snapshot.val())
})

notesRef.on('child_removed', (snapshot) => {
  console.log('child removed', snapshot.key, snapshot.val())
})

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
})

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('todo added', snapshot.key, snapshot.val())
})

var newTodoRef = todosRef.push({
  text: 'EAT BUTT'
})
