import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './basic/Counter';
import ToggleComponent from './basic/ToggleComponent';
import ComplexCounter from './basic/ComplexCounter';
import BasicInput from './basic/BasicInput';
import BasicAPICall from './basic/BasicAPICall';
import BasicEventListener from './basic/BasicEventListener';
import BasicUpdateLifecycle from './basic/BasicUpdateLifecycle';
import AdvancedJavascript from './basic/AdvancedJavascript';
import BasicTernary from './basic/BasicTernary';
import BasicToDoList from './basic/BasicToDoList';
import DisplayMessages from './redux/DisplayMessages';
import AppWrapper from './redux/DisplayMessagesRedux';
import DisplayMessagesRedux from './redux/DisplayMessagesReduxPresentational';
import DisplayMessagesReduxState from './redux/DisplayMessagesReduxState';

import { Tabs, TabList, Tab, TabPanel } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
            <Tab eventKey={1} title="Basic Counter">
                <Counter></Counter>
            </Tab>
            <Tab eventKey={2} title="Toggle Component">
                <ToggleComponent></ToggleComponent>
            </Tab>
            <Tab eventKey={3} title="Complex Counter">
                <ComplexCounter></ComplexCounter>
            </Tab>
            <Tab eventKey={4} title="Basic Input">
                <BasicInput></BasicInput>
            </Tab>
            <Tab eventKey={5} title="Basic API Call">
                <BasicAPICall></BasicAPICall>
            </Tab>
            <Tab eventKey={6} title="Basic Update lifecycle">
                <BasicUpdateLifecycle></BasicUpdateLifecycle>
            </Tab>
            <Tab eventKey={7} title="Advanced Javascript rendering">
                <AdvancedJavascript></AdvancedJavascript>
            </Tab>
            <Tab eventKey={8} title="Basic ternary">
                <BasicTernary></BasicTernary>
            </Tab>
            <Tab eventKey={9} title="To Do List">
                <BasicToDoList></BasicToDoList>
            </Tab>
            <Tab eventKey={10} title="Display Messages">
                <DisplayMessages></DisplayMessages>
            </Tab>
            <Tab eventKey={11} title="Display Messages Redux">
                <AppWrapper></AppWrapper>
            </Tab>
            <Tab eventKey={12} title="Display Messages Presentational">
                <DisplayMessagesRedux></DisplayMessagesRedux>
            </Tab>
            <Tab eventKey={13} title="Display Messages Redux State">
                <DisplayMessagesReduxState></DisplayMessagesReduxState>
            </Tab>
         </Tabs>
      </div>
    );
  }
}

export default App;
