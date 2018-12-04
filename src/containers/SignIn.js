import React from 'react';
import {connect} from 'react-redux';
import SignInForm from '../components/SignInForm.js';
import {updateCurrentUser} from '../actions/UserActions';


const mapStateToProps = function(state){
    return {
        userState: state.UserState
    };
};

// map redux dispatch to props
const mapDispatchToProps = function(dispatch) {
    return {
        dispatch: dispatch
    };
};

class SignIn extends React.Component {

	constructor(){
		super()
		this._handleUserUpdate = this.handleUserUpdate.bind(this);
	}

	handleUserUpdate(userData){
		this.props.dispatch(updateCurrentUser(userData));
		this.props.history.push('/', null);
	}

	render(){
		return (
			<div className='signInContainer'>
	          <SignInForm userState={this.props.userState} handleValidForm={this._handleUserUpdate}/>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);