import React, { Component } from 'react'
import Home from './Home.js';

class TodosComplete extends Component {

  render() {
    
    const todoComplete = this.props.entries.filter(item => {
      return item.completed === true;
    });
    
    let listTodos = todoComplete.map(this.props.createTasks)
    return (
      <div className="todos">
      <ul className="theList">{listTodos}</ul> 
      
      </div>
      )
    }
  }

export default TodosComplete

            // <ul className="theList">{console.log(listItems)}</ul>       