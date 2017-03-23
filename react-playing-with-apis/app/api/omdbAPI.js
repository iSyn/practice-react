var axios = require('axios')

const OMDB_URL = 'http://www.omdbapi.com/?';

module.exports = {
  getMovies: function(input) {
    var encodedInput = encodeURIComponent(input)
    var requestUrl = `${OMDB_URL}t=${encodedInput}`

    return axios.get(requestUrl).then(function(res) {
      if (res.data.Response === 'true') {
        return res
      } else {
        alert('No Movie Found')
      }
    }, function(err) {
      // throw new Error('err.response.data.message')
      throw new Error('Unable to fetch proper data')
    })
  }
}
