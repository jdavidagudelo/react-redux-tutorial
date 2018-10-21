import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';


class BasicInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return (
      <div>
        <FormControl componentClass="textarea" placeholder="textarea" onChange={this.handleChange} value={this.state.input}/>
        <h4>Controlled Input:</h4>
        <FormControl componentClass="textarea" placeholder="textarea" value={this.state.input} disabled/>
      </div>
    );
  }
};

export default BasicInput;