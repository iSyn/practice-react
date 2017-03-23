var React = require('react')

var Form = require('Form')
var omdbAPI = require('omdbAPI')
var Data = require('Data')

var Main = React.createClass({

  getInitialState: function() {
    return{
      movieTitle: undefined,
    }
  },

  handleSearch: function(input) {
    var that = this
    omdbAPI.getMovies(input).then(function(res) {
      console.log('response from Main.jsx', res)
      that.setState({
        movieTitle: res.data.Title,
        moviePoster: res.data.Poster,
        moviePlot: res.data.Plot
      })
    }), function(err) {
      console.log('error: ', err)
    }
  },

  render: function() {
    return(
      <div>
        <h1>React Movies</h1>
        <Form onSearch={this.handleSearch}/>
        <Data title={this.state.movieTitle}
              poster={this.state.moviePoster}
              plot={this.state.moviePlot}
              />
      </div>
    )
  }
})

module.exports = Main


