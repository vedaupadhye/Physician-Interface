import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import App from './App'
import Foo from './components/Foo'
import LoginForm from './components/Login'
import {auth} from './reducers/auth';
import thunkMiddleware from 'redux-thunk';

// Add the reducer to your store on the `routing` key
const store = createStore(
  auth, {
  	init:{
  		token:null,
		doctor_id:null,
		isFetching:false
  	}
  },
  (window.devToolsExtension && window.devToolsExtension())
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/foo" component={Foo}/>
        <Route path="/login" component={LoginForm}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)