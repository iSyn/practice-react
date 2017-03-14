var React = require('react')

var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({

  getInitialState: function() {
    return{
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var that = this

    this.setState({
      isLoading: true
    })

    openWeatherMap.getTemp(location).then(function(temp) {
      // 'this' is in a function so we can use 'this'
      // So you create a variable up top binding 'this' to 'that'
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function(err) {
      alert(err)
      that.setState({
        isLoading: false
      })
    })
  },

  render: function() {
    var {isLoading, temp, location} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching the weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return(
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather
