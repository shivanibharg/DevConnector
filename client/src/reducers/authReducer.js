//Handle my login and registration data
//job of reducer to write data into store
//state is immutable and you cannot go back to the previous state
import {SET_CURRENT_USER} from '../actions/types';
import isEmpty from '../utils/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action){
  switch(action.type){
      case SET_CURRENT_USER:
      //below data goes into store
      return{
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
      default: 
        return state;
  }
};
