import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import { bindActionCreators } from 'redux';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import * as loginActions from '../actions/login';
import { connect } from 'react-redux'

//import '../index.css';


export default class LoginForm extends React.Component {
	
	static propTypes = {
        'loginActions': PropTypes.func.isRequired
  }
    constructor(props) {
        super(props);
    }
	
//   loginActions.login=this.props.loginActions.login.bind(this);

   handleSubmit( evt ) {
   		 evt.preventDefault();
            console.log('In handleSubmit!')
            // call our onLogin props that came from the container
            //this.props.onLoginRedirect();
            let email=document.getElementById('email').value;
            let name=document.getElementById('name').value;
            //store.dispatch(login(name,email));
             console.log(this.props.loginActions);
            this.props.loginActions.login(name);
        	
        
   }

    render() {


        return (
            //<form onSubmit={ this.handleSubmit.bind(this) } onChange={ this.handleInputChange.bind(this) }>
                   
               <div className="loginElement">
                    <div className="textinput">
                        <center><label htmlFor="name">Name:</label>
                        <input type="text" id="name" className="" />
                    </center>    
                    </div>
                     <div className="textinput">
                        <center><label htmlFor="email">Email:</label>
                        <input type="text" id="email" className="" />
                    </center>
                    </div>
                    
              
                <div >
                    <center><button type="submit" className="login" onClick={this.handleSubmit.bind(this)}>Login</button></center>
                </div>
              </div>
           
            //</form>
        );
    }
}

export default connect(
	state => ({ isFetching: state.init.isFetching,
	 			token:state.init.token,
	 			user_id:state.init.user_id
	 }),
 	dispatch => ({
        'loginActions': bindActionCreators(loginActions,dispatch)
 })
 )(LoginForm) ;


