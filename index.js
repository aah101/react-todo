// for login
//index calls App.js, for the signin
//index calls home.js to go straight to react app
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './components/todo/App.js';
import Home from './components/todo/containers/Home.js'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
		<Home />
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();