var React = require('react')

var Data = React.createClass({

  render: function() {
    var {title, poster, plot} = this.props

    function renderPoster() {
      if (poster != '' && poster != 'N/A') {
        return <img src={poster}/>
      } else {
        return <h3>No Image Found</h3>
      }
    }

    return(
      <div>
        <h1>{title}</h1>
        {renderPoster()}
        <p>{plot}</p>
      </div>
    )
  }
})

module.exports = Data


