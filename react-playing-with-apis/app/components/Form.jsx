var React = require('react')

var Form = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault()
    var input = this.refs.input.value

    if (input.length > 0) {
      this.refs.input.value = '';
      this.props.onSearch(input)
    }
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref='input' placeholder='Input movie name'/>
        <button className='button'>Search</button>
      </form>
    )
  }
})

module.exports = Form


