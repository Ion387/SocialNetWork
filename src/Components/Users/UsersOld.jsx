import React from "react"
import s from "./Users.module.css"
import axios from "axios"


const Users= (props) => {

   if (props.users.length===0) {
  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
    props.setusers(response.data.items)
  })}
    
 
    

/* props.setusers([
    {id:1,
      url:"https://avatars.mds.yandex.net/i?id=1888009cd5adfeaa3ef9bdf93580568c78c2759e-8199407-images-thumbs&n=13", 
    followed: true, fullname:'Ирёна',status:'Im Fairy', country:"Russia"  },
    {id:2,
       url:"https://avatars.mds.yandex.net/i?id=1888009cd5adfeaa3ef9bdf93580568c78c2759e-8199407-images-thumbs&n=13", 
      followed: false,fullname:'Ирёна-Катена',status:'Im Cool', country:"Cossmos"  },
    {id:3,
       url:"https://avatars.mds.yandex.net/i?id=1888009cd5adfeaa3ef9bdf93580568c78c2759e-8199407-images-thumbs&n=13", 
      followed: true,fullname:'Ирёна-Крутёна',status:'Im VeryColl', country:"RussiaX"  }
 ])} */
/*   users */
const photoOfIrena= "https://avatars.mds.yandex.net/i?id=1888009cd5adfeaa3ef9bdf93580568c78c2759e-8199407-images-thumbs&n=13"
  return (
  <div> {
props.users.map (u => <div key={u.id}> 
  <span>
    <div><img className={s.index} src = {u.photos.small === null ? photoOfIrena : u.photos.small }/></div>
    <div> {u.followed ? <button onClick={()=>  {props.follow(u.id)} 
      } >follow</button> : <button onClick={()=> {props.unfollow(u.id)}} >unfollow</button>} </div>
    </span>
  <span>
  <div>{u.name}</div><div>{}</div>
  <span>

  </span>
  <div>{}</div><div></div>
  <span>

    
  </span>

  </span>
  </div>)}
  </div>
)}

/* const User = (props) => {
  
  const usersElement=
  
/*   const messageElements=props.textsData.map (message => <Messages key={message.id}    text={message.text}/>); */
/*   return(
  <div>
{usersElement}
</div>) */


  export default Users