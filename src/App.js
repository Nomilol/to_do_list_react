import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h3>ToDO List </h3>
      <label for="task"/>
      <input name="task"/>
      </div>
    );
  }
}

export default App;
