import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LightsOut from './components/LightsOut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LightsOut</h1>
        </header>
        <LightsOut />
      </div>
    );
  }
}

export default App;
