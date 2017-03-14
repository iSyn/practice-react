var React  = require('react')

// var WeatherMessage = React.createClass({
//   render: function() {

//     var {temp, location} = this.props

//     return(
//       <div>
//         <h3>It is {temp} in {location}</h3>
//       </div>
//     )
//   }
// })

var WeatherMessage = ({temp, location, low, max, weather}) => {
  return(
    <div>
      <h3 className='text-center'>It is {temp} in {location}</h3>
      <p className='text-center'>Lowest is {low} and highest is {max} <br/>{weather} </p>

    </div>
  )
}

module.exports = WeatherMessage
