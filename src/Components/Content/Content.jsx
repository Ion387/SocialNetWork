import React from "react"
import s from './Content.module.css';
import Posts from "./Posts/Posts";
import MainPicture from "./MainPicture/MainPicture";
import PostsContainer from './Posts/PostsConteiner';
import { useLocation } from "react-router-dom";
import axios from "axios"
import { usersApi } from "../../API/AxiosApi";
import StatusContainer from "./Status/StatusContainer";
import StatusContainerHooks from "./Status/StatusContainerHooks";

const Content=(props) => { 
  const location = useLocation();

 const indexOfProfile=parseInt(location.pathname.match(/\d+/)) 
/*  if (!props.userProfile) {return<div></div>}  */

/*  usersApi.letGetContent(indexOfProfile).
    then(response=>{
      props.setProfileOthetUser(response.data);  }) */
  return <div>
   
{/*   <img src={props.userProfile.photos.small} /> */}
<MainPicture />
{ <StatusContainerHooks status={props.status} putStatusThunkCreator={props.putStatusThunkCreator}
getStatusThunkCreator={props.getStatusThunkCreator}
/> }
  <PostsContainer />
</div> }

  export default Content;





