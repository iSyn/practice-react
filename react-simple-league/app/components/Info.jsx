var React = require('react')

var Info = React.createClass({

  render: function() {
    return(
      <div>
        <h1>Summoner Name: {this.props.summonerName}</h1>
      </div>
    )
  }
})

module.exports = Info
