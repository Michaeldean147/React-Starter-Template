import React from 'react';
import { Link } from "react-router-dom";
import Icon from './Icon.js'

export default class Navigation extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
          <div className='navigationContainer'>
          		<Icon />
          		<Link to="/">Home</Link>
          		<Link to="/nasa">NASA</Link>
  	          	<Link to="/signIn">Sign In</Link>
          </div>
		)
	}

}