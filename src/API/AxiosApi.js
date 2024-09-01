import React from "react";
import axios from "axios";

/* const url='https://social-network.samuraijs.com/api/1.0/' */

const instance= axios.create({
  withCredentials:true, 
  headers:{"API-KEY":"a25c5181-9a85-411e-977b-9fa6d94bdb80"},
  baseURL:'https://social-network.samuraijs.com/api/1.0/'
})

export const usersApi =
{

letFollow (id)  { 
return instance.post('follow/'+id,{})},

letUnfollow (id)  { 
  return instance.delete('follow/'+id)},

letGetUsers (chosenPage, showUsersCount)  { 
  return instance.get("users?page="+chosenPage+"&count="+showUsersCount, {withCredentials:true })},





}

export const contentApi ={

letAuthContent ()  { 
return instance.get("auth/me")},

letGetContent (indexOfProfile)  { 
  return instance.get("Profile/"+indexOfProfile)} ,
  
letGetStatus (userProfile)  { 
  return instance.get(`profile/status/${userProfile}`)} ,

  letPutStatus (status) { 
    return instance.put("profile/status/", {status})} ,

}


export const loginApi ={

  letLogin (email,password, rememberMe)  { 
  return instance.post("/auth/login/",{email,password,rememberMe})},
  

  outLogin ()  { 
    return instance.delete("/auth/login/")},
    }
/* 31568 */

/*   export let letGetUsers = (chosenPage, showUsersCount) => { 
    return axios.get(url+"users?page="+chosenPage+"&count="+showUsersCount, {withCredentials:true })} */