var React = require('react')

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var updates = {}
    var name = this.refs.inputName.value;
    var message = this.refs.inputMessage.value;

    if (name.length > 0) {
      this.refs.inputName.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.inputMessage.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates)
  },

  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref='inputName' placeholder='Enter name'/>
        </div>
        <div>
          <textarea ref='inputMessage' placeholder='Enter message'></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
})

module.exports = GreeterForm
