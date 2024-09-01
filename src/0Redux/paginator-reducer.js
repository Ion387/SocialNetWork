import axios from "axios"
import { contentApi, loginApi } from "../API/AxiosApi"
import { logOutAC, setUserData } from "./Auth-reducer"


export const onClickLeftArrowOfPaginator = (currentLeftPageNumber) => {return {
type : 'onClickLeftArrowOfPaginator', currentLeftPageNumber
}}

export const onClickRightArrowOfPaginator = (totalNumberOfPages) => {return {
type : 'onClickRightArrowOfPaginator', totalNumberOfPages
}}

const initialState ={
leftPageNumber:1
}
const paginatorReducer =(state=initialState, action)=> {


switch (action.type) {

case'onClickLeftArrowOfPaginator': 

return {
...state,
leftPageNumber: state.leftPageNumber>10 && state.leftPageNumber-10
}

case'onClickRightArrowOfPaginator': 

return {
...state,
leftPageNumber: state.leftPageNumber<action.totalNumberOfPages-10 && state.leftPageNumber+10
}


default: return state
}}








/*       return (dispatch)=>{ console.log(123123)
//loginApi.letLogin(email,password, rememberMe) 

axios.post("https://social-network.samuraijs.com/api/1.0/auth/login/", {email,password, rememberMe}).then
(response=>{console.log(123123);})
} */



export default paginatorReducer