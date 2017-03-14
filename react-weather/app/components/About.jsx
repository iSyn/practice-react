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
      <h1 className='text-center'>About</h1>
      <p>This is a weather application built on React.JS</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map API</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
}

module.exports = About
