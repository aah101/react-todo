import React, { Component } from 'react'
import Home from './Home.js';

class TodosActive extends Component {

  render() {
  
     const todoActive = this.props.entries.filter(item => {
    	return item.completed === false;
    });
    

    let listItems = todoActive.map(this.props.createTasks)
    return (
		<div className="todos">
		<ul className="theList">{listItems}</ul>  
    	</div>
      )
     }
  }

export default TodosActive
          	// <ul className="theList">{console.log(listItems)}</ul>