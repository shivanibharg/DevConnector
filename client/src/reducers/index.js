//root reducer to list all the reducers, another layer of delegation

import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer 
});