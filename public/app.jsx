var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
})

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

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Default',
      message: 'This is the default message'
    }
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      messsage: this.props.message
    }
  },

  handleNewData: function(updates) {
    this.setState(updates);
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return(
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Synclair'

ReactDOM.render(
  <Greeter
    name={firstName}
    />,
  document.getElementById('app')
);
