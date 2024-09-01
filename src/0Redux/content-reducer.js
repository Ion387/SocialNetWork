import { contentApi } from "../API/AxiosApi";


const initialState = {
  userProfile:2, 
  postData: [
    {id:1 ,message:'ЭЙ!!!', likes:20 },
    {id:2 ,message:'privet', likes:41 },
    {id:3 ,message:'kag dila?', likes:56 },
    {id:4 ,message:'Mnnee horoho!!', likes:34 },
    {id:5 ,message:'kleeva!', likes:10 },
    {id:5 ,message:'kleeva!', likes:10 },],
  
   newPostText:'2',
   status:'',
   fake:0
}

const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_OTHER_USER = 'SET-SET-PROFILE-OTHER-USER';
const GET_STATUS = 'GET-STATUS';
const PUT_STATUS = 'PUT-STATUS';

export const addPostActionCreator = (newPost) => { return{
  type: ADD_POST, newPost:newPost
}} ;





export const updateNewPostTextActionCreator = (text) => { return{
  type: UPDATE_NEW_POST_TEXT, text: text
}} ;

export const setProfileOthetUserAC = (user) => { return{
  type: SET_PROFILE_OTHER_USER, user
}} 

export const getStatus = (status) => { return{
  type: GET_STATUS, status
}} 

export const putStatus = (status) => { return{
  type: PUT_STATUS, status
}} 

export const fake = () => { return{
  type: 'FAKE'
}} ;


/////////////////////////////////
const contentReducer = (state=initialState, action)=> {

switch (action.type) {
case 'ADD-POST':  
return {
    ...state,
     postData:[...state.postData,{id:5, 
      message: action.newPost, 
      like:0}] 
    
/*     newPostText:'',
    postData:[...state.postData,{id:5, 
      message: state.newPostText, 
      like:0}]
  ,  */};




case 'UPDATE-NEW-POST-TEXT': 
return{
  ...state,
  newPostText: action.text
};

case SET_PROFILE_OTHER_USER: 
return {
...state, 
/*    postData:[...state.postData], */
  userProfile:action.user
}

case GET_STATUS: 
return {
...state, 
  status:action.status
}

case PUT_STATUS: 
return {
...state,
status:action.status
/* ...state, 
  status:action.status */
}

case 'FAKE': 
return {
  ...state,
   fake:state.fake+1
}

default:return state
}}


export const getStatusThunkCreator=(userProfile)=>{
  return (dispatch)=>{
   
    contentApi.letGetStatus(userProfile).then
  (response=>{
    dispatch(getStatus(response.data))
    
    
})
}} 

export const putStatusThunkCreator=(status)=>{
  return (dispatch)=>{

    contentApi.letPutStatus(status).then
  (response=>{
     if(response.data.resultCode===0){dispatch(putStatus(status))}; 

})
}} 











export default contentReducer