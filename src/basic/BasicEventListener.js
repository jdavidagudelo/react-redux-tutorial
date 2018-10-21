import React, { Component } from 'react';

class BasicEventListener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      entersCount: 0
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleEnter() {
    this.setState({
        entersCount: this.state.entersCount + 1
    });
    this.setState({
      message: 'You have pressed the enter key ' + this.state.entersCount + ' times.'
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

export default BasicEventListener;
