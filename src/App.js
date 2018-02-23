import React, { Component } from 'react';
import States from './Game/Game';
import './App.css';

class App extends Component {
  render() {
    States();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
