import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        this.props.fiftyFifty? 'Win!': 'You lose!'
      }
      </h1>
    )
  };
};

class GameOfChance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    let expression = Math.random() > .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}></Results>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

export default GameOfChance;