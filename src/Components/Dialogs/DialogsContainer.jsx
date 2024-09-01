import Messages from "./Message/Message"
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"
import Contact from "./Contact/Contact";
import NewMessage from "./NewMessage/NewMessage";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import Dialogs from "./Dialogs";
import { authRedirect } from "../../Hoc/AuthRedirect";
import React from "react"
import { connect } from "react-redux";

class DialogsApiComponent extends React.Component {

  
componentDidMount()

{}

render () {
return <Dialogs contactsData={this.props.contactsData}/>

}}

let mapStateToProps = (state) => {
  return{
    contactsData:state.dialogs.contactsData

  }}





  export default connect(mapStateToProps)( authRedirect((DialogsApiComponent)) )