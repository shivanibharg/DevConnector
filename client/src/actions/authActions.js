import {GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Register user
export const registerUser = (userData, history) => 
//everything that you do inside of an action is a dispatch call
//In browsr forward and back is history. That's the notion with history here
//Think of history as an array to go to various places
//History is a property of React
dispatch => {

  axios.post('/api/users/register', userData)
  .then(res => history.push('/login'))
  .catch(err => 
    dispatch({
     type: GET_ERRORS,
      payload: err.response.data
    }));
};

//Login- Get user token
export const loginUser = userData => dispatch =>{
    axios.post('/api/users/login', userData)
    .then(res => {
      //save to local storage
      //In a browser their is a local storage
       const {token} =res.data;

      //set token to ls
      //Local storage is nothing but dictionary with key and value pair
      localStorage.setItem('jwtToken', token);

      //set token to auth header
      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);

      //set redux store
      dispatch(setCurrentUser(decoded));

    })
    .catch(err => 
        dispatch({
         type: GET_ERRORS,
          payload: err.response.data
        }));
};

export const setCurrentUser = (decoded) =>{
  return{
   type:SET_CURRENT_USER,
   payload: decoded

  }

};

export const logoutUser=() => dispatch => {
  //Remove token from local Storage
   localStorage.removeItem('jwtToken');
  //Remove auth header
    setAuthToken(false);
  //set current user to {} in redux
  dispatch(setCurrentUser({}))
};
