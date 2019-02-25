//pattern 
//index calls home.js, which is the react todo file
//this one calls the react page from teh server

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import App from './components/todo/App.js';
import Home from './components/todo/Home.js'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { BrowserRouter } from 'react-router-dom';

const logger = createLogger()

const rootReducers = combineReducers({setFooter, })

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
);


//note using browserrouter before, how will this work now? 
// ReactDOM.render((
// 	<BrowserRouter>
// 		<Home />
// 	</BrowserRouter>
// 	), document.getElementById('root'));

registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();