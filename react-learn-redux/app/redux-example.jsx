var redux = require('redux')

console.log('starting redux example')

var actions = require('./actions/index')
var store = require('./store/configureStore').configure()

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState()

  console.log('New State', store.getState())

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View your location</a>'
  }
})

// unsubscribe()

var currentState = store.getState()
console.log('currentState', currentState)

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Synclair'))
store.dispatch(actions.addHobby('Running'))
store.dispatch(actions.addHobby('Walking'))
store.dispatch(actions.removeHobby(1))
store.dispatch(actions.changeName('Emily'))
store.dispatch(actions.addMovie('Mad Max', 'Action'))
store.dispatch(actions.addMovie('Shrek', 'Animation'))
store.dispatch(actions.removeMovie(1))

