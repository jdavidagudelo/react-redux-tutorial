import React, { Component } from 'react';


class BasicUpdateLifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {previousValue: 0};
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }

  componentDidUpdate() {
    console.log('Component has updated...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value % 2 == 0;
  }

  componentWillReceiveProps(nextProps){
    this.setState({previousValue: this.props.value});
  }

  render() {
    return (
        <div>
            <h2>Current value: {this.props.value}</h2>
            <h2>Previous value: {this.state.previousValue}</h2>
        </div>);
  }
};

class BasicUpdateLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <BasicUpdateLifecycleComponent value={this.state.value}/>
      </div>
    );
  }
};

export default BasicUpdateLifecycle;
