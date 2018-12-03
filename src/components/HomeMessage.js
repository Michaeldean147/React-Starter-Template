import React from 'react';

export default class HomeMessage extends React.Component {

	constructor(){
		super()
	}

	render(){
		return [
			<p>{this.props.message}</p>,
      		<p>This is just a little React app that was made to showcase the functionality of Redux, React Router, and Redux-Thunk</p>
		]
	}

}