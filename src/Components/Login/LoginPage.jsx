import React , {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { addSubmit, getLoginThunkCreator, outLoginThunkCreator } from "../../0Redux/login-reducer";
import { loginApi } from "../../API/AxiosApi";
import { getStatusThunkCreator } from "../../0Redux/content-reducer";
import { logOut } from "../../0Redux/Auth-reducer";

const LoginPage=(props)=>{
  const dispatch=useDispatch();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
   /*  const lo */

    const onSubmit = (data) => {
      props.getLoginThunkCreator(data.email,data.password, data.rememberMe)
     
      props.addSubmit(data.email,data.password, data.rememberMe)  // при отправке
    }
const logOutLocal=()=>{ 
  props.outLoginThunkCreator()}
    
/*   props.addSubmit(watch("example"),watch("exampleRequired"))  *///каждый ввод
    
   
    return (
      !props.isLogined ?
      <form  onSubmit={handleSubmit(onSubmit)} >
        <div>
        <input placeholder={'email'} {...register("email")} />
        </div>
        <div>
        <input placeholder={'password'} {...register("password", { required: true })} />
        </div>
    
        {props.email }{props.password }{props.rememberMe}
        <div>
        <input type ={'checkbox'} {...register("rememberMe")}/> remember me
        </div>
      {/*   {errors.exampleRequired && <span>This field is required</span>} */}
  
        <input type="submit" value="Войти" /> 
      </form>
  :
  <input type='button' value='Выйти' onClick={logOutLocal}/>
  )


  }
  const mapStateToProps= (state)=>{
    return{
      email:state.login.email,
      password:state.login.password,
      rememberMe:state.login.rememberMe,
      captcha:state.login.captcha,
      isLogined:state.auth.isLogined
    }
  }




  export default connect(mapStateToProps,{addSubmit, outLoginThunkCreator, getLoginThunkCreator})(LoginPage)

   