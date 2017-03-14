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
      errorMessage: undefined
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
      console.log('error: ', err)
      that.setState({
        isLoading: false,
        errorMessage: err.message
      })
    })
  },

  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Fetching the weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
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
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather
