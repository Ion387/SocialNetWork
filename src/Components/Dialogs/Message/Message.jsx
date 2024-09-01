import s from "./Message.module.css"


const Messages = (props) => { 
  return (
  <div className={s.itemMessage}>
    {props.text}
  </div> )}

const Message = (props) => {
  const messageElements=props.textsData.map (message => <Messages text={message.text}/>);
   return (
  <div >
   {messageElements} </div>
)}

  export default Message;