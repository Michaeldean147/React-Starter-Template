import React from 'react';

export default class HomeMessage extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
			<div>
				<p>Hi {this.props.userState.userName || 'Guest'}, {this.props.message}.</p>
      			<p>This is just a little React app that was made to showcase the functionality of Redux, React Router, and Redux-Thunk.</p>
      			<p>Visit the NASA page to see the Astronomy Picture Of The Day, provided by NASA's API.</p>
      			<p>Users can also visit our faux Sign In page. Once signed in, users will see their username above in place of 'Guest'.</p>
			</div>
		)
	}

}