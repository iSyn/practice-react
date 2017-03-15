var React = require('react')

// Require Components
var Info = require('Info')

var Main = React.createClass({

  getInitialState: function() {
    return{
      summonerName: undefined,
    }
  },

  handleSearchSummoner: function(e) {
    e.preventDefault()

    if (this.refs.search.value > 0) {
      var name = this.refs.search.value
      this.refs.search.value = ''
      this.setState({
        summonerName: name
      })
    }
  },

  render: function() {

    return(
      <div>
        <header>Basic React League of Legends App</header>
        <form onSubmit={this.handleSearchSummoner}>
          <input type="text" placeholder='Search for a summoner name' ref='search'/>
        </form>
        <Info summonerName={this.state.summonerName}/>
      </div>
    )
  }
})

module.exports = Main
