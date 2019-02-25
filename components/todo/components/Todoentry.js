import React, { Component } from 'react'
//displays the current todo
class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  render() {
    return (
      <div className="todoEntry">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="What needs to be done?"
              autoFocus="autofocus"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList



// <button type="submit"> Submit </button>