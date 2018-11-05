import React from 'react';
import { Link } from "react-router-dom";
import Icon from './Icon.js'

export default class Navigation extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
          <div className="navigationContainer">
     		<Icon />
          	<Link to="/home">Home</Link>
          	<Link to="/about">About</Link>
          	<Link to="/otherStuff">Stuff</Link>
          </div>
		)
	}

}