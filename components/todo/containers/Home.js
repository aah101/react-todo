// {queston - how does navlink set routepath?}
// where do you call setFooter? if it all?

// components - goal is to render
// Todoentry
// TodoCounter
// toggleall

// containers - aware of app state, connect to redux store
// TodoComplete
// todalall
// TodosActive
// home.js

// components in home.js
//   createTasks
//   setFooter
//   deleteItem
//   deleteCompletedItems
//   checkComplete
//   toggleAllComplete
//   handleInput
//   addItem


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../components/Todoentry.js';
import TodosAll from './TodoAll';
import TodosCompleted from './TodoComplete';
import TodosActive from './TodosActive';
import TodoCounter from '../components/TodoCounter'
import ToggleAll from '../components/toggleAll.js';
import { Switch, HashRouter, Route, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Todo.css';

class Home extends React.Component {
  inputElement = React.createRef()
  constructor() {
    super();
    this.state = { 
          display: {  
            all: true,
            active: false,
            completed: false
          },
          items: [],
          isChecked: false,
          'currentItem': {
            text: '',
            key: '',
            completed: false,
            } 
        }

    }
    
hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

//   componentDidMount() {
//     this.hydrateStateWithLocalStorage();
//  }
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
}

componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
}

 createTasks = item => {
    return (
        <div className="todos">
        <form>
          <input 
          type="checkbox"
          className="checkbox"
          key={item.key}
          
          checked={item.completed ? 'checked' : false }  
          onChange={() => this.checkComplete(item)}
        />
        
        </form> 

        <li 
        key={item.key}
        className="todoItems"
        style={{
            textDecoration: item.completed ? 'line-through' : 'none',
          }}
          >{item.text}
        </li>  
         
        <p className="deleteButton" 
        onClick={() => this.deleteItem(item.key)}
        >X
        </p>        
      </div>      
    )
  }
  //where is this called? 
  setFooter = (item) => {
    (item === 'all') ?
      this.setState({
      display: {
      all: true,
      active: false,
      completed: false
      }
      }) 
      : (item === 'active') ?
      this.setState({
      display: {
      all: false,
      active: true,
      completed: false
      }
      }) 
      : this.setState({
      display: {
      all: false,
      active: false,
      completed: true
      }
    })
  };
  
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key != key;
    })
    this.setState({
      items: filteredItems,
    })
    localStorage.setItem("items", JSON.stringify(filteredItems));
  }

  deleteCompletedItems = () => {
    const filteredItems = this.state.items.filter(item => {
      return !item.completed;
    })
    this.setState({
      items: filteredItems,
      isChecked: false
    })
  }

  checkComplete = todo => {
    this.setState ({
      items: this.state.items.map (item => {
        if (item.key === todo.key) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };

  toggleAllComplete = () => {
        var todosArray = [];
        var todos = this.state.items
        for(var i=0; i < todos.length; i++) {
          if(todos[i].completed) {
            todosArray.push(todos[i]);  
          }
          if(todos[i].completed === false) {
            this.setState ({
              isChecked: true,
              items: this.state.items.map(item => {     
              item.completed = true;      
              return item;  
              })
            })
          }
            if(todosArray.length === todos.length) {
            this.setState({
            isChecked: false,
            items: this.state.items.map (item => {     
            item.completed = false;            
            return item;
              })
            })
        }          
    }
  }        

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), completed: false }
    this.setState({
      currentItem,
    })
    localStorage.setItem('currentItem', JSON.stringify(currentItem));
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        filteredItems: items,
        currentItem: { text: '', key: '', completed: false },
      })
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('newItem', "");
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="todoDisplay">
        
        <ToggleAll
          entries={this.state.items}
          toggle={this.toggleAllComplete}
          ischecked={this.state.isChecked}
        />
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          entries={this.state.items}
          // toggleAll={this.toggleAllComplete}
        />

        <div className="list">
        <Route exact path="/" 
          render={()=><TodosAll 
          entries={this.state.items} 
          entryDisplayies={this.state.items} 
          deleteItem={this.deleteItem} 
          completeItem={this.completeItem}
          checkComplete={this.checkComplete}
          createTasks={this.createTasks}/>}
        />
        <Route path="/active" 
          render={()=><TodosActive
          entries={this.state.items} 
          deleteItem={this.deleteItem} 
          completeItem={this.completeItem}
          checkComplete={this.checkComplete}
          createTasks={this.createTasks}/>} 
        />
        <Route path="/completed" 
          render={()=><TodosCompleted
          entries={this.state.items} 
          deleteItem={this.deleteItem} 
          completeItem={this.completeItem}
          checkComplete={this.checkComplete}
          createTasks={this.createTasks}/>}
        />
      </div>
            <div className="nav">
                <TodoCounter 
          
                entries={this.state.items} 
                >
                </TodoCounter>
                
                <button
                type="submit" 
                className="navButtons"
                >

                    <NavLink to='/'> 
                    All 
                    </NavLink>
                </button>
                
                <button
                type="submit"
                className="navButtons" 
                >
                    <NavLink to='/active'>  
                    Active 
                    </NavLink>
                </button>

                <button
                type="submit" 
                className="navButtons"
                > 
                    <NavLink to='/completed'>
                    Completed 
                    </NavLink>
                </button>    
                 
                <button
                type="button"
                className="clearComplete"
                //value="Clear completed"
                onClick={this.deleteCompletedItems}
                >Clear completed
                </button>
          </div>
        </div>
      </HashRouter>
      )
    }
  }

export default Home;