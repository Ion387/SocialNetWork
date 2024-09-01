import s from "./Contact.module.css"
import { NavLink } from "react-router-dom";


 const Contacts = (props) => {   
  return (
  <div className={s.name}>
    <NavLink to={"/Messeges/"+props.id} className = {navData=>navData.isActive ? s.active : s.name }>{props.name}</NavLink> 
  </div> )}
/*    */


const Contact = (props) => { 
  let dialogsElements=props.contactsData.map (dialog => <Contacts  id={dialog.id} name={dialog.name} />);
  
  return (
  <div >
   {dialogsElements} </div>
)}
  export default Contact;