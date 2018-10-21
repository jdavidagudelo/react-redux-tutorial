import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    this.handleClick = this.addItem.bind(this);
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};

export default Counter;