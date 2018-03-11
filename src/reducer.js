import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import types from './ducks/types';

export default combineReducers({
  types,
  routing: routerReducer
});
