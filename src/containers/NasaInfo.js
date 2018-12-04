import React from 'react';
import NasaContent from '../components/NasaContent.js'
import {fetchNasaData} from '../actions/NasaInfoActions'
import {connect} from 'react-redux';

const mapStateToProps = function(state){
    return {
        nasaState: state.NasaState
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch: dispatch
    };
};

class NasaInfo extends React.Component {

	constructor(){
		super()
	}

	componentDidMount(){
		this.props.dispatch(fetchNasaData());
	}

	render(){
		let nasaData = this.props.nasaState.NasaData
		return (
			<div className='nasaContentContainer'>
				<NasaContent data={nasaData}/>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(NasaInfo);