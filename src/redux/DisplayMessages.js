import React, { Component } from 'react';

class DisplayMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState(
      {input: event.target.value}
    );
  }
  submitMessage(){
    this.setState({
      input: '',
      messages: this.state.messages.concat([this.state.input])
    });
  }

  render() {
    let items = this.state.messages.map(
      v => <li>{v}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange}
            value={this.state.input}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{items}</ul>
      </div>
    );
  }
};

export default DisplayMessages;