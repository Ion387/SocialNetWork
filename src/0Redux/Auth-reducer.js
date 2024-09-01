import { contentApi, usersApi } from "../API/AxiosApi";

const initialState = {
  data: {
Id:null,
email:null,
login:'login',
},
isLogined:false
}


const SET_USER= 'SET-USER';


export const setUserData = (data) => { return{
  type: SET_USER, data
}} ;

export const logOutAC = () => { return{
  type: 'LOG-OUT'
}} ;


const auth= (state=initialState, action)=> {

switch (action.type) {
case SET_USER:  
return {
    ...state,
    data:action.data,
    isLogined:true,
  };

  
  case 'LOG-OUT':  
  return {
      state:{data: {
        Id:null,
        email:null,
        login:'login',
        },
        isLogined:false}
    };

default:return state
}}



export const getAuthThunkCreator=()=>(dispatch)=>{
    contentApi.letAuthContent().then(response=>{
    if (response.data.resultCode===0){dispatch(setUserData(response.data.data));
    }});
}


export default auth