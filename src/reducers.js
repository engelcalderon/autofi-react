import { combineReducers } from 'redux';
import * as globalReducers from './ducks';

export default combineReducers({...globalReducers});