import React from 'react';
import validationHelper from '../helpers/validationHelper'

export default class SignInForm extends React.Component {

	constructor(){
		super()
		this.state = {
			userInfo: {
				userEmail: '',
				userName: ''
			},
			formValid: true
		}
		this._handleSubmit = this.handleSubmit.bind(this);
		this._handleUpdate = this.handleUpdate.bind(this);
	}

	handleSubmit(e){
		e.preventDefault()
		let isValid = true;
		const formState = this.state.userInfo;

		for(let key of Object.keys(formState)){
			if(!validationHelper(key, formState[key])){
				isValid = false;
				break;
			}
		}
		this.setState({
			formValid: isValid
		}, () => {
			if(isValid){
				this.props.handleValidForm(this.state.userInfo)
			}
		}) 	
	}

	handleUpdate(e){
		const newUserInfo = Object.assign({}, this.state.userInfo, {[e.target.name]: e.target.value})

		this.setState({
			userInfo: newUserInfo
		})
	}

	render(){
		const state = this.state
		return (
          <div>
	          <div className='inputContainer'>
	            <form>
	                <p className='h5'>Please enter your details below</p>
	                {!state.formValid && <p className='errorMessage'>Your Email/Username is invalid.</p>}
	                <div>
		                <input 
		                    type="email" 
		                    name="userEmail"                    
		                    placeholder="Email"
		                    className={`userEmail`}
		                    onChange={this._handleUpdate}
		                />
	                </div>

	                <div>
		                <input 
		                    type="text" 
		                    name="userName"                    
		                    placeholder="Username"
		                    className={`userName`}
		                    onChange={this._handleUpdate}
		                />
	                </div>

	                <div className="submitButtonContainer">
						<button type="submit" className="submitButton" onClick={this._handleSubmit}>
							Submit
						</button>
		            </div>
	            </form>
             </div>
		  </div>
		)
	}

}