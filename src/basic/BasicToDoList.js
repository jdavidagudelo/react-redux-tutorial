import React, { Component } from 'react';

const textAreaStyles = {
  width: 235,
  margin: 5
};

class BasicToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    const itemsArray = e.target.value.split(',');
    this.setState({
      userInput: e.target.value
    });
    this.setState({
      toDoList: itemsArray
    });
  }
  render() {
    const items = this.state.toDoList.filter(v => v.trim() !== '').map(
      v => <li>{v}</li>);
    console.log(items);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

export default BasicToDoList;