import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {initialState} from './initialState.js'

const composedEnhancers = compose(
    applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
	rootReducer,
	initialState,
	composedEnhancers
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
 	document.getElementById('root')
);

