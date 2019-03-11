import  axios from '../apis/axios'
import history from "../history"
import {toastr} from 'react-redux-toastr'
import {POST_LIST} from './types'

//it defines our type of application
const header = {
  "Content-Type" : "application/json"
}

//function will show the success or warning
const toastrSuccessFuction = (title,msg) => toastr.success(title,msg)
const toastrWarningFuction = (title,msg) => toastr.error(title,msg) 

//login action creator
export const signIn = formValues => async () => {
    try{
      const response  = await axios.post('jwt-auth/v1/token',{...formValues},{header:header});
      console.log(response.data)
      
      toastrSuccessFuction(`SignIn Successful`,`${formValues.username}`)
      localStorage.setItem("authToken", response.data.token);
      //localStorage.setItem("UserId", response.data.user_id);
      
      //console.log(localStorage.getItem("validToken"))
      history.push('/'); 
    }
    catch(error){
      toastrWarningFuction(` Error due to form submission`,`${formValues.username}`);
    }     
  };

  //redister user action creator
  export const signUp = formValues => async () => {
    try{
      const response  = await axios.post('wp/v2/users/register',{...formValues});
      console.log(response.data)
      toastrSuccessFuction(`${response.data.message}`,`${formValues.username}`)
      history.push('/'); 
    }
    catch(error){
      toastrWarningFuction(`Error due to form submission`,`${formValues.username}`);
    }   
  };

  //log out action creator
  export const logOutUserAction = () => {
    localStorage.removeItem("UserId")
    localStorage.removeItem("authToken");

    toastrSuccessFuction(`LogOut Status`,`You are Successfully logout your profile`);
  };


  //update user profile action creator
  export const updateUser = formValues => async () => {
    //console.log(formValues);
    const response  = await axios.post('/wp/v2/users/register',{...formValues});
    console.log(response.data.message);
  };


  //show all post action creator

  export const postList = () => async (dispatch) => {
    try{
      let header = {
        "Content-Type" : "application/json",
        "Authorization":`Bearer ${localStorage.getItem("authToken")}`
      }
        console.log(header);      
        const response =await axios.get('/wp/v2/posts');
        console.log(response.data ,'actions');
        dispatch ({type: POST_LIST ,payload :response.data});
    }catch(error){
      toastrWarningFuction(`something went wrong `,``);
    }
    
  };

  export const postCreate = formValues => async () => {
    try{
      let header = {
        "Content-Type" : "application/json",
        "Authorization":`Bearer ${localStorage.getItem("validToken")}`
      }
      console.log(header)
      const response  = await axios.post('/wp/v2/posts',{...formValues});
      console.log(response.data);
    }catch(error){
      toastrWarningFuction(`Create Post Error`,`${formValues.title}`);
    } 
  };