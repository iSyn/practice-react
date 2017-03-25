import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyCuRWOK-iKlEPI6mqcZI8BuUxEHtY7nGp0",
    authDomain: "todo-app-cbb10.firebaseapp.com",
    databaseURL: "https://todo-app-cbb10.firebaseio.com",
    storageBucket: "todo-app-cbb10.appspot.com",
    messagingSenderId: "1080084981579"
  }
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase
