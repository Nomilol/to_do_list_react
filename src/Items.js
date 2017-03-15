import React, { Component } from 'react';

class Items extends Component {
  constructor() {
    super();
    this.state = {
      items : [
        {
          id : 1,
          content : "coder"
        },
        {
          id : 2,
          content : "trouver une copine"
        }
      ]
    }
  }
  render(){
    const itemsNodes = this.state.items.map(item =>{
      console.log(itemsNodes);
      return <li key={ item.id }>{ item.content }</li>
    });
    return (
      <div>
        <ul>
          { itemsNodes }
        </ul>
      </div>    
    )
  }
}



export default Items;
