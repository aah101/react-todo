import React, { Component } from 'react'

class TodosAll extends Component {
  // shouldComponentUpdate(nextProps) {
  //       let todoAll = this.props.entries;
  //       return todoAll;
  //   }

  render() {
    let todoAll = this.props.entries; 
    const listItems = todoAll.map(this.props.createTasks)
    return (
      <div>
      <ul className="theList">{listItems}</ul>  
      </div>
      )
     }
  }

export default TodosAll;


