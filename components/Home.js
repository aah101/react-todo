// I've bypassed this file, now into the second todo folder

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import App 
// const Home  = ({onInputChange, onButtonSubmit}) => {
//   return (
//     <div>
//       <p className="f3">
//         {'Todo List'}
//       </p>
//       <div className="center">
//         <div className="form center pa4 br3 shadow-5">
//           <input className="f4 pa2 w-70  center" type="text" onChange={onInputChange} />
//           <button 
//           className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
//           onClick={onButtonSubmit}
//           >Detect</button>
//         </div>
//       </div>
//     </div>
//     );
// }
 
// const Home = ({onInputChange, onButtonSubmit}) => {
  
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
   }
}

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

export default Home;

// export default Home;
