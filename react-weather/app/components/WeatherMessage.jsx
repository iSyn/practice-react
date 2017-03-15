var React  = require('react')

var WeatherMessage = ({temp, location, low, max, weather}) => {

  var icon = ''



  var weatherIcon = [
    '🌧', // raining
    '🌤', // cloudy
    '🌨', // snowing
    '🌩', // thunder
    '☀️', // sunny
    '🌁' // foggy
  ]

  if (weather === 'Clouds') {
    icon = weatherIcon[1]
  } else if (weather === 'Haze' || 'Mist') {
    icon = weatherIcon[5]
  } else if (weather === 'Clear') {
    icon = weatherIcon[4]
  } else if (weather === 'Snow') {
    icon = weatherIcon[2]
  }

  return(
    <div>
      <h3 className='text-center'>It is 🌡{Math.round(temp)}° in <span style={{textTransform: 'capitalize'}}>{location}</span></h3>
      <p className='text-center'>Lowest is {low}° and highest is {max}° <br/>{weather}{icon} </p>
    </div>
  )
}

module.exports = WeatherMessage
