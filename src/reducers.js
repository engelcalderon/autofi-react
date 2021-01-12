import { combineReducers } from 'redux';
import * as globalReducers from './ducks';
import * as pageReducers from './containers/reducers';

export default combineReducers({...globalReducers, ...pageReducers});