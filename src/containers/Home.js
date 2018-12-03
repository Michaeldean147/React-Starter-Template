import React from 'react';
import {connect} from 'react-redux';
import HomeMessage from '../components/HomeMessage.js';

const mapStateToProps = function(state){
    return {
        homeState: state.HomeState
    };
};

// map redux dispatch to props
const mapDispatchToProps = function(dispatch) {
    return {
        dispatch: dispatch
    };
};

class Home extends React.Component {

	constructor(){
		super()
	}

	render(){
		return (
			<div>
	          <HomeMessage message={this.props.homeState.HomeMessage}/>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);