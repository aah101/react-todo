import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class TodoCounter extends Component {
  render() {
  	const todoCount = this.props.entries.filter(item => {
      return item.completed === false;
    });
  	 if(todoCount.length === 1) {    
    return (
        <p className="itemCount">{todoCount.length} item left</p>
        )
    	} else {
    	return (	
    		<p className="itemCount">{todoCount.length} items left</p>
    	)
    	}  
	  }
	} 

export default TodoCounter