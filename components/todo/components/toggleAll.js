import React, { Component } from 'react'

class ToggleAll extends Component {

  render() {
    return (
      <div className="toggleButton">
      	<form>
            <input  
            type="checkbox"
            checked={this.props.ischecked}
            onClick={this.props.toggle}
            className="toggleAllComplete"
            // entries={this.props.entries}
            // onChange={this.props.toggleAll}
            />
         </form>
      </div>


    )
  }
}

export default ToggleAll;
	