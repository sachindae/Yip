import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import axios from 'axios';

//import logo from './logo.svg';
//import './App.css';
import TeamMembers from './components/TeamMembers.js';
import DisplayData from './components/DisplayData.js';

import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

class App extends Component{

	render(){

			return (
      <AuthProvider>
          <Router>
              <div>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
              </div>
          </Router>
      </AuthProvider>
  );
		
	}
}

export default App;

const wrapper = document.getElementById("container2");
wrapper ? ReactDOM.render(<App />, wrapper) : false;


/*
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class App extends Component{
	constructor(props){
    	super(props);
    	this.state = { text: 'Follow' };
    	this.handleClick = this.handleClick.bind(this);
  	}

	handleClick(e){
		this.setState({text: "Unfollow"});
		var formData = {kennel:"restaurants"};
		axios.get(`http://localhost:8000/load_reviews`, {
			params:{
				kennel: "restaurants"
			}
			})
	      .then(function (response){
	      	console.log(response);
	      });
	}

	render(){

			return (
				<div>
				<h1>YEET</h1>
				<button onClick={this.handleClick}>{this.state.text}</button> 
				</div>
			);
		
	}
}

export default App;

const wrapper = document.getElementById("container2");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
*/