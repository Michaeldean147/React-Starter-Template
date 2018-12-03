import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import NasaReducer from './NasaReducer';
const rootReducer = combineReducers({
  HomeState: HomeReducer,
  NasaState: NasaReducer
});
export default rootReducer;