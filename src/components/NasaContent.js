import React from 'react';
import loader from '../assets/loading.gif';


export default class NasaContent extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
          <div>
	          <p>Welcome To The NASA APOD (Astronomy Picture Of The Day) Page.</p>
	          <p>Below is an example of how you can use Redux-Thunk to make your Redux actions asynchronous!</p>

	          {this.props.data && 
	          	<div className="nasaInfoContainer">
		          	<h4>{this.props.data.title}</h4>
		          	<img src={this.props.data.hdurl || loader} height='250px' width='250px'/>
		          	<p>{this.props.data.explanation}</p>
          		</div>
          	  }
			</div>
		)
	}

}