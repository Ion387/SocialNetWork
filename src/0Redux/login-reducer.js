import axios from "axios"
import { contentApi, loginApi } from "../API/AxiosApi"
import { logOutAC, setUserData } from "./Auth-reducer"


export const addSubmit = (email, password, rememberMe) => {return {
  type : 'Submit', email , password, rememberMe
  }}


const initialState ={
email: 'email',
password:'password',
rememberMe:true,
captcha:true

}
const loginReducer =(state=initialState, action)=> {


  switch (action.type) {
  
  case'Submit': 

      return {
        ...state,
         email:action.email,
         password:action.password,
         rememberMe:action.rememberMe
      }
       

  default: return state
    }}

    export const getLoginThunkCreator=(email,password, rememberMe)=>{
      return (dispatch)=>{
       
        loginApi.letLogin(email,password, rememberMe).then(response=>{
          
         if (response.data.resultCode===0) {dispatch(setUserData())}
         else {;}
    

        })
        .catch(response=>{})
    }}
    
    export const outLoginThunkCreator=()=>{
      return (dispatch)=>{
       
        loginApi.outLogin().then(response=>{
     
         if (response.data.resultCode===0) {dispatch(logOutAC())}
         else {console.log('you not login');}
    

        })
        .catch(response=>{;console.log('шото ваще пошло не так!'); })
    }  }






      
      
/*       return (dispatch)=>{ console.log(123123)
        //loginApi.letLogin(email,password, rememberMe) 

        axios.post("https://social-network.samuraijs.com/api/1.0/auth/login/", {email,password, rememberMe}).then
      (response=>{console.log(123123);})
    } */
    


export default loginReducer