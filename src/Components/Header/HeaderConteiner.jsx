import React, { useEffect } from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
import axios from "axios"
import { connect } from "react-redux"
import Header from "./Header"
import { setUserData, getAuthThunkCreator } from "../../0Redux/Auth-reducer";
import { usersApi}  from "../../API/AxiosApi"
import Load from "../Load/Load";
import { isLoading, letLoading } from "../../0Redux/Load-Reducer";


const HeaderApiComponent =(props)=>{

useEffect(()=>
  {props.getAuthThunkCreator()},[]
)

/* useEffect(()=>
  {props.letLoading(props.isLoading)},[props.isLoading]
)
 */

 return (
<>
   <Header  login={props.login}/>
    <Load />  
  </>)
}


let mapStateToProps = (state) => {
return{
data:state.auth.data,
login:state.auth.data.login,
}}



export default connect(mapStateToProps, {
setUserData, getAuthThunkCreator

})(HeaderApiComponent)