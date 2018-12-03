import ReduxThunk from 'redux-thunk'
import axios from 'axios';


export function fetchNasaData(){
	return (dispatch) => {
	    handleNasaFetch().then(
	      response => { 
	      	dispatch({
	      		type: 'UPDATE_NASA_INFO',
	      		data: response.data
	      	})
	      },
	      error => { console.log(error) }
	    );
  	};
}


function handleNasaFetch(){
	return axios({
		method: 'GET',
		url: 'https://api.nasa.gov/planetary/apod?api_key=WVRE5pJf3tWnS0ukNkKYMYFDYdJeb6uB2noRvjgB'
	})
}