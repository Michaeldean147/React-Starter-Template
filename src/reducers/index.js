import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import NasaReducer from './NasaReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  HomeState: HomeReducer,
  NasaState: NasaReducer,
  UserState: UserReducer
});
export default rootReducer;