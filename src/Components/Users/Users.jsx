import React from "react"
import s from "./Users.module.css"
import { irena1 } from "../../1Pictures/Irena1";
import axios from "axios"
import { Navigate, NavLink, Redirect} from "react-router-dom";
import { usersApi } from "../../API/AxiosApi";
import Paginator from "../../Utilits/Paginator";



let Users= (props) =>{

/* let index=0;
let pages=[];
let currentPage=0;
if (props.count <= 10) {currentPage=props.count} 
else {currentPage=10}
for (let i=1; i<=currentPage; i+=1){ 
pages.push(i)
} */

/* if(!props.isLogined) {return <Navigate to="/Login"/>} */

return <div> 

{/* {pages.map(p=> {
  return <span key = {p} className={
props.chosenPage===p ? s.selectedPage : ""} 
onClick={()=>{props.onNumberClick(p)}}> {p} </span>})} */}

<Paginator count={props.count} chosenPage={props.chosenPage} onClick={props.onNumberClick} />
{props.users.map((u,index) =>   
<div key={u.id}> 
<span>
<NavLink to= {"/Profile/"+u.id} >
<div><img className={s.index} src = {u.photos.small === null ? irena1 : u.photos.small }/></div>
</NavLink>
<div> {u.followed ? 
  <button 

disabled={props.isClicked.some(isClicked=> isClicked==u.id  )   } 
  onClick={()=> { 
    
    props.getFollowThunkCreator(u.id) 

  }}>unfollow</button> : 
  <button 

disabled={props.isClicked.some(id=> id==u.id)} 

  onClick={()=> {
  props.getUnfollowThunkCreator(u.id)
   }} >follow</button>} 
  </div>
</span>

<span>{u.name}</span>

</div>)}

</div>
}

export default Users