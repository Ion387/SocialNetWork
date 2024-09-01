import React, { useState, useEffect } from "react"


class StatusContainer extends React.Component {

  
 state = {
  isVisibleInput: false,
  status:this.props.status
} 



componentDidMount()
{}

componentDidUpdate (prevProps, prevState) {
if (prevProps.status!==this.props.status) {
  this.setState({status:this.props.status}); 

}


}

unVisibleInput =() => {
  this.setState({isVisibleInput: true})

}

onStatusChange=(e)=>{
this.setState({status:e.currentTarget.value})   ;
}

onBlured = ()=>{
  this.setState({isVisibleInput: false});  
  this.props.putStatusThunkCreator(this.state.status); 
}


render () 

{
  return (
<div>
 {this.state.isVisibleInput 
?
  <div> <input onChange={this.onStatusChange} autoFocus={true} onBlur={()=> this.onBlured() } 
  value={this.state.status}/> </div>
:
  <span onClick={this.unVisibleInput} >{this.props.status}</span>
 }
</div>

)}}








export default StatusContainer 


