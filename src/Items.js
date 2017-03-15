import React, { Component } from 'react';

class Items extends Component {
  constructor() {
    super();
  }
  render(){
    let items = ["jouer", "coder", "manger", "boire"];
    let itemsNodes = items.map((item)=>
    <li key={item.toString()}>{item}</li>
  );
  return(
    <ul>{itemsNodes}</ul>
  );
  }
}








export default Items;
