var axios = require('axios')

const LEAGUE_URL = 'https://na.api.pvp.net/api/lol/NA/v1.4/summoner/by-name/';
const API_KEY = 'RGAPI-A8121438-4A4B-4416-9715-AB8AB9004E65'

//https://na.api.pvp.net/api/lol/NA/v1.4/summoner/by-name/i dont eat butt?api_key=RGAPI-A8121438-4A4B-4416-9715-AB8AB9004E65

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
