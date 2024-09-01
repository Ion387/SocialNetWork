import s from './Content.module.css';
import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import { getStatusThunkCreator, setProfileOthetUser, setProfileOthetUserAC, putStatusThunkCreator } from '../../0Redux/content-reducer';
import Content from './Content';
import { useLocation, useParams } from 'react-router-dom'
import { authRedirect } from '../../Hoc/AuthRedirect';
import { compose } from 'redux';
import Load from '../Load/Load';
import { endOfLoading, Loading } from '../../0Redux/Load-Reducer';



/* let url='';
this.props.match.params ? url=`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params}`:   url='https://social-network.samuraijs.com/api/1.0/profile/';  */

class ContentContainer extends React.Component  { 
  
  componentDidMount = () =>{

  this.props.getStatusThunkCreator (this.props.userProfile)
}


 /*  componentDidMount = () =>{
    let UserId= this.props.match.params; */
  /*   axios.get(this.props.url). */
/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params}`). */
/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).
    then(response=>{
      this.props.setProfileOthetUser(response.data);  }*/


  render () {

  return ( 
<div className={s.index}> 

<Content userProfile={this.props.userProfile}
setProfileOthetUser={this.props.setProfileOthetUser}
putStatusThunkCreator={this.props.putStatusThunkCreator}
getStatusThunkCreator={this.props.getStatusThunkCreator}
status={this.props.status}

/>

</div> )}}


let mapStateToProps = (state) => {
  
  return{
    userProfile:state.profile.userProfile,
    status:state.profile.status,
    fake:state.profile.fake
 
  }}
/* let mapDispatchToProps = (dispatch) => {
  return{
    setProfileOthetUser:(user)=> {
      dispatch(setProfileOthetUserAC(user))


}}} */


export default compose(
connect(mapStateToProps,{setProfileOthetUserAC,getStatusThunkCreator, putStatusThunkCreator}),
authRedirect)
(ContentContainer)

let authRedir = authRedirect((ContentContainer))


/* let WithUrlDataConteinerComponent = withRouter (ContentContainer) */




 