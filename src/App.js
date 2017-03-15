import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Input from './Input.js';
import Items from './Items.js';

class App extends Component {
  render() {
    return (
      <div>
      <Input/>
      <Items/>
      </div>
    );
  }
}

export default App;
