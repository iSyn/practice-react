var React = require('react')

var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')
var ErrorModal = require('ErrorModal')

var Weather = React.createClass({

  getInitialState: function() {
    return{
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var that = this

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      low: undefined,
      max: undefined,
      weather: undefined
    })

    openWeatherMap.getTemp(location).then(function(res) {
      // 'this' is in a function so we can use 'this'
      // So you create a variable up top binding 'this' to 'that'
      console.log(res)
      that.setState({
        isLoading: false,
        location: location,
        temp: res.data.main.temp,
        low: res.data.main.temp_min,
        max: res.data.main.temp_max,
        weather: res.data.weather[0].main
      })
    }, function(err) {
      console.log('error: ', err)
      that.setState({
        isLoading: false,
        errorMessage: err.message
      })
    })
  },

  componentDidMount: function() {
    var location = this.props.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },

  render: function() {
    var {isLoading, temp, location, low, max, weather, errorMessage} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching the weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} low={low} max={max} weather={weather}/>
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather
