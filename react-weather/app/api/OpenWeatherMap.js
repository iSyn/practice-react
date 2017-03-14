var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '726349cbda86fa3f4ecfbf48282d90de'
var units = 'imperial'

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}?appid=${API_KEY}&units=${units}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res
      }
    }, function(err) {
      // throw new Error('err.response.data.message')
      throw new Error('Unable to fetch weather for that location')
    })
  }
}
