import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
const rootReducer = combineReducers({
  AppState: AppReducer
});
export default rootReducer;