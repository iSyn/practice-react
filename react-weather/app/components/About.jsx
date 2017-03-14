var React = require('react')

// var About = React.createClass({
//   render: function() {
//     return(
//       <h3>About Component</h3>
//     )
//   }
// })

// Since this component only has a render function,
// this is known as a stateless component
// and can be written a lot simpler

var About = (props) => {
  return(
    <div>
      <h3>About</h3>
      <p>Welcome to the about page!</p>
    </div>
  )
}

module.exports = About
