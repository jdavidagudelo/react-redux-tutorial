import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ComplexCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1});
  }

  decrement() {
    this.setState({count: this.state.count - 1});
  }

  reset() {
    this.setState({count: 0});
  }

  render() {
    return (
      <div>
        <Button className='inc' onClick={this.increment} bsStyle="success">Increment!</Button>
        <Button className='dec' onClick={this.decrement} bsStyle="warning">Decrement!</Button>
        <Button className='reset' onClick={this.reset} bsStyle="danger">Reset</Button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

export default ComplexCounter;