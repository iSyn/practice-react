var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

// Load foundation
$(document).foundation()

// Load CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <h1>React Boilerplate</h1>,
  document.getElementById('app')
);
