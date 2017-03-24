var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

// Load foundation
$(document).foundation()

// Load CSS
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>React Boilerplate</p>,
//   document.getElementById('app')
// );

// require('./redux-todo-example.jsx')
require('./redux-example')
