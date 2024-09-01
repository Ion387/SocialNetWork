import Messages from "./Message/Message"
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import NewMessage from "./NewMessage/NewMessage";
import NewMessageContainer from "./NewMessage/NewMessageContainer";


 const Dialogs = (props) => { 
  
  return ( 
    <div className={s.index}>
<Contact contactsData={props.contactsData}/>
<NewMessageContainer/>
</div> )}
  export default Dialogs;