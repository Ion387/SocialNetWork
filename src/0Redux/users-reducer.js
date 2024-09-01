/* 2024 г На сколько я поняла, у модуля redux-thunk нет экспорта по умолчанию, экспорт именованный и заключается в фигурные скобки. У меня получилось так:

import {thunk} from “redux-thank”;

const thunkMiddleware = thunk;

…

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

Все работает, спасибо СЕНСЕЙ )))) */
import { usersApi } from "../API/AxiosApi";
import { updateObjectInArray } from "../Utilits/UsefulFunctions";




const initialState ={
  users:[],
  chosenPage:1,
  showUsersCount:10,
  isFetching:false,
  isClicked:[],
  fake:0,
  count:0
}


//Экшены:
const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow"
const SET_USERS = "SetUsers"
const SHOW_OF_SCROLL_USERS = "ShowOfScrollUsers"
const SET_USERS_PAGE = "SetUsersPage"
const IS_FETCHING = "IsFetching"
const IS_CLICKED = "IsClicked"

export const follow = (userId) => {return {
  type : FOLLOW, userId
  }}

export const unfollow = (userId) => {return {
  type : UNFOLLOW, userId
  }}

export const setusers = (users) => { return {
  type: SET_USERS, users
}}

export const showOfScrollUsers = (numberOfUsers) => { return {
  type: SHOW_OF_SCROLL_USERS, numberOfUsers
}}


export const setUsersPage = (chosenPage) => { return {
  type: SET_USERS_PAGE, chosenPage
}}

export const isFetching = (isFetch) => { return {
  type: IS_FETCHING, isFetch
}}



export const disableButtonOnClick = (buttonHide ,id) => { return {
  type: IS_CLICKED, buttonHide ,id
}}
export const endOfLoading = () => { return{
  type: 'END-OF-LOADING'
}} ;

export const Loading = () => { return{
  type: 'LOADING'
}} ;

export const fake = () => { return{
  type: 'FAKEusers'
}} ;


export const getUserThunkCreator=(chosenPage,showUsersCount)=>{
  return async(dispatch)=>{
    dispatch( Loading())
let response =  await usersApi.letGetUsers(chosenPage,showUsersCount)
    dispatch( endOfLoading())
    dispatch(setusers(response.data.items));
    dispatch(showOfScrollUsers(response.data.totalCount))

}}


export const  getFollowThunkCreator= (id)=>{
  return async (dispatch)=>{
    
    dispatch(  isFetching(true))
dispatch(disableButtonOnClick(true,id));
   let response = await usersApi.letUnfollow(id)

      dispatch( endOfLoading())
    if (response.data.resultCode===0) { dispatch(follow(id))}; 

    dispatch( disableButtonOnClick(false))
    dispatch( isFetching(false))
    dispatch( disableButtonOnClick(false,id));

}}

export const getUnfollowThunkCreator=(id)=>{
  return (dispatch)=>{
 
   dispatch(isFetching(true)) 
    usersApi.letFollow(id).then(response=>{

        if (response.data.resultCode===0) { dispatch(unfollow(id))}; 
        
        dispatch( disableButtonOnClick(false))
        dispatch(isFetching(false)) 
        dispatch( disableButtonOnClick(false,id));
})
}}


const usersReducer =(state=initialState, action)=> {


  switch (action.type) {
  
case'Follow': 
return {...state, 
/*  users: [...state.users], равно мапу без выбора, что ниже*/
/* users: state.users.map(u=>u)  } */
users: state.users.map(u=> {
if (u.id===action.userId) {return {...u, followed:false}};
return {...u} })}
 

case'Unfollow': 
return {...state, 
  users:updateObjectInArray(state.users, action.userId, 'id', {followed:true})
  /*  users: [...state.users], равно мапу без выбора, что ниже*/
  /* users: state.users.map(u=>u)  } */
 /*  users: state.users.map(u=> {
  if (u.id===action.userId) {return {...u, followed:true}};
  return u }) */

}
 
  case 'SetUsers': 
  return {...state,
    
    users:action.users,
}

  case SHOW_OF_SCROLL_USERS: 
  let countOfPages=Math.ceil(action.numberOfUsers/10) 
  return {
    ...state,
    users:[...state.users],
    count:countOfPages
}

case SET_USERS_PAGE: 
  return {
    ...state,
    chosenPage:action.chosenPage
/*     ...state,
    users:[...state.users],
    count:countOfPages */
}

case IS_FETCHING: 
  return {
    ...state,
    isFetch:action.isFetch,
}


case IS_CLICKED: 

    return {
    /*   ...state,
      isClicked: action.buttonHide  ?  
      
      [...state.isClicked, action.id]
       : state.isClicked.filter(id=>id!=action.id)  */
      

      ...state,
        isClicked: action.buttonHide ? 
        [...state.isClicked,action.id] :
        state.isClicked.filter(b=> b===action.id)
  }

  case 'FAKEusers': 
return {
  ...state,
   fake:state.fake+1
}

default:return state
}}


  
    
/*     [action.number],
    users: state.users.map(u=> {
      if (u.id===action.Id) {return {...u, followed:true}};
      return u }) */





export default usersReducer
