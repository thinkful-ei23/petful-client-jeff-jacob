import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import combineReducers from './reducers/index';

export default createStore(combineReducers, applyMiddleware(reduxThunk))

