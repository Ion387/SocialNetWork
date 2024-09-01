import s from "./NewMessage.module.css"
import React from "react"


const Messages = (props) => { 
  return (
  <div className={s.itemMessage}>
    {props.text}
  </div> )}


let textMessageElement=React.createRef()

const NewMessage = (props) => { 

let addMessage = () => {
props.addMessage()
}

let onMessageChange = () =>{
  
  let textMessage=textMessageElement.current.value; 
props.changeMessageText(textMessage)
}
const messageElements=props.textsData.map (message => <Messages key={message.id}    text={message.text}/>);

  return (
  <div className={s.itemMessage}>
 {messageElements}
   <textarea onChange={onMessageChange}  placeholder="Enter Your Message"  className="textArea" ref={textMessageElement} value={props.newTextMessage} />
  
    <button onClick={addMessage}>Отправить</button>
    
  </div> )}

  export default NewMessage;