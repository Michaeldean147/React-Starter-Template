import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = function(state){
    return {
        appState: state.AppState
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
          <p>{this.props.appState.HomeMessage}</p>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);