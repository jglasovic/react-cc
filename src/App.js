import React, { Component } from 'react';
import './App.css';
import Level1 from './level1/Level1';
import ColorService from './ColorService/ColorService';

class App extends Component {
  colorService = new ColorService();
  render() {
    return (
      <div className="App">
        <button onClick={this.colorService.getColors}>Get Colors</button>
        <Level1 />
      </div>
    );
  }
}

export default App;
