import React from "react"
import {addMessageActionCreator, updateNewMessageTextCreator} from '../../../0Redux/dialogs-reducer';
import NewMessage from "./NewMessage";
import { connect } from "react-redux";


let mapStateToProps=(state)=>{

return{
  newTextMessage : state.dialogs.newTextMessage,
  textsData: state.dialogs.textsData
}}

let mapDispatchToProps=(dispatch)=>{
return{
addMessage:()=>
{dispatch(addMessageActionCreator());},

changeMessageText: (textMessage)=>
{let action = updateNewMessageTextCreator (textMessage);
dispatch(action)},
}}

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps)(NewMessage)

export default NewMessageContainer;







/* const NewMessageContainer = (props) => { 

let addMessage = () => {
props.store.dispatch(addMessageActionCreator());
}

let changeMessageText = (textMessage) =>{
  let action = updateNewMessageTextCreator (textMessage);
    props.store.dispatch(action)
} */

/*   return (
    
<NewMessage changeMessageText={changeMessageText} addMessage={addMessage} newTextMessage={props.store.getState().dialogs.newTextMessage} />
  )}
 */