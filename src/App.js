import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './Hello';
import CardContainer from './CardContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Hello className="App-intro"/>
        <CardContainer />
      </div>
    );
  }
}

export default App;
