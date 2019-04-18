import {GET_ERRORS} from '../actions/types';


const initialState ={};

export default function(state = initialState, action){

    switch(action.type){
        case GET_ERRORS: 
            return action.payload;
    //in case something happens return the normal state back
            default:
              return state;
    }
}