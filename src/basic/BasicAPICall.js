import React, { Component } from 'react';

class BasicAPICall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: 'loading...'
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};


export default BasicAPICall;