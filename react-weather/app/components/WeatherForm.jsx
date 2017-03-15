var React  = require('react')

var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault()
    // sets the variable location equal to the value of the input
    var location = this.refs.location.value

    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input className='main-search' type="search" ref='location' placeholder='Search weather by city'/>
          <button className='main-button button expanded hollow'>Get Weather</button>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm
