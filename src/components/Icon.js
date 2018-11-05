import React from 'react';
import logo from '../assets/logo.svg';

export default class Icon extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
          <img src={logo} className="App-logo" alt="logo" />
		)
	}

}