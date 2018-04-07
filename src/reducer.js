import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import types from './ducks/types';
import markets from './ducks/markets';

export default combineReducers({
  types,
  markets,
  routing: routerReducer
});
