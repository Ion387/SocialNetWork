import React, { useEffect } from "react"
import { connect } from "react-redux"
import Users from "./Users"
import { follow, isFetching, setUsersPage, showOfScrollUsers, unfollow, setusers, disableButtonOnClick, getUserThunkCreator, getFollowThunkCreator, getUnfollowThunkCreator } from "../../0Redux/users-reducer"
import axios from "axios"
import  sandclock  from "../../1Pictures/SandClock.gif"
import { usersApi } from "../../API/AxiosApi"
import { authRedirect } from "../../Hoc/AuthRedirect"
import { compose } from "redux"
import Load from "../Load/Load"
import { gettchosenPage, gettshowUsersCount, gettUsers,gettisFetching, gettisClicked, gettFake, gettdif} from "../../0Redux/1UsersSelector.js"


const UsersApiComponent = (props) => {

const onNumberClick = (p) => {
    props.setUsersPage(p);
    props.getUserThunkCreator(props.chosenPage,props.showUsersCount);}
   

useEffect(()=>{props.getUserThunkCreator(props.chosenPage,props.showUsersCount)},[])



  return (
<>



 {props.isFetch ? <img src={sandclock} style={{textAlign: "right"}}   /> : null}  


<Users
  count={props.count}
  users={props.users}
  chosenPage={props.chosenPage}
  unfollow={props.unfollow}
  follow={props.follow}
  onNumberClick={onNumberClick}
  disableButtonOnClick={props.disableButtonOnClick}
  setUsersPage={props.setUsersPage}
  isClicked={props.isClicked}
  isFetching={props.isFetching}
  getFollowThunkCreator={props.getFollowThunkCreator}
  getUnfollowThunkCreator={props.getUnfollowThunkCreator}
  isLogined={props.isLogined}
/>

</>

)}



/* 

class UsersApiComponent extends React.Component {
  /* constructor(props){
  super(props)
  } 
  
componentDidMount()
{
  this.props.getUserThunkCreator(this.props.chosenPage,this.props.showUsersCount);
/*   usersApi.letGetUsers(this.props.chosenPage,this.props.showUsersCount).then(response=>{

this.props.setusers(response.data.items);
this.props.showOfScrollUsers(response.data.totalCount) 
/* for (let i=0;  i<this.props.showUsersCount; i+=1){
  this.props.isClicked[i]={id:i,click:false}  }}) ;
}


onNumberClick = (p) => {
  
this.props.setUsersPage(p);
this.props.getUserThunkCreator(this.props.chosenPage,this.props.showUsersCount);


/* usersApi.letGetUsers(this.props.chosenPage,this.props.showUsersCount).then(response=>{
this.props.setusers(response.data.items);
this.props.showOfScrollUsers(response.data.totalCount)
}); */
/* for (let i=1;  i<this.props.showUsersCount; i+=1){
  this.props.isClicked[i]={id:i,click:false}
} 

}

render () 

{
  return <>
 {this.props.isFetch ? <img src={sandclock} style={{textAlign: "right"}}   /> : null}  

<Users
  count={this.props.count}
  users={this.props.users}
  chosenPage={this.props.chosenPage}
  unfollow={this.props.unfollow}
  follow={this.props.follow}
  onNumberClick={this.onNumberClick}
  disableButtonOnClick={this.props.disableButtonOnClick}
  setUsersPage={this.props.setUsersPage}
  isClicked={this.props.isClicked}
  isFetching={this.props.isFetching}
  getFollowThunkCreator={this.props.getFollowThunkCreator}
  getUnfollowThunkCreator={this.props.getUnfollowThunkCreator}
  isLogined={this.props.isLogined}
/>

</>
}} */



let mapStateToProps = (state) => {

  return{
  
users:gettUsers(state),

chosenPage:gettchosenPage(state),

showUsersCount:gettshowUsersCount(state),

isFetch:gettisFetching(state),

isClicked:gettisClicked(state),

isLogined:state.auth.isLogined,
isLoading:state.load.isLoading,

fake:state.usersPage.fake,

dif:gettdif(state),

count:state.usersPage.count
}}




/* let mapDispatchToProps  = (dispatch) => {
return{
follow:(userId)=> {
dispatch(followAC(userId))
},
unfollow:(userId)=> {
dispatch(unfollowAC(userId))
},
setusers:(users)=> {
dispatch(usersAC(users))
},
showOfScrollUsers:(numberOfUsers)=> {
dispatch(showOfScrollUsersAc(numberOfUsers))
}, 
setUsersPage:(chosenPage)=> {
dispatch(setUsersPageAc(chosenPage))
}, 
isFetching:(isFetch)=> {
dispatch(isFetchingAc(isFetch))
}, }}   */


export default compose ( 
  connect(mapStateToProps, {
    unfollow,follow,showOfScrollUsers,
    setUsersPage,isFetching,setusers,
    disableButtonOnClick,getUserThunkCreator,
    getFollowThunkCreator, getUnfollowThunkCreator
    }),
authRedirect)
(UsersApiComponent )




/* let authRedir = authRedirect((UsersApiComponent))

export default connect(mapStateToProps, {
unfollow,follow,showOfScrollUsers,
setUsersPage,isFetching,setusers,
disableButtonOnClick,getUserThunkCreator,
getFollowThunkCreator, getUnfollowThunkCreator
})(authRedir) */