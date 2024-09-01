import React, { useState, useEffect } from "react"



const StatusContainerHooks=(props)=> {



 let[isVisibleInput,setIsVisibleInput]=useState(false)
 let[status,setStatus]=useState(props.status)

  useEffect(()=>{ 
  props.getStatusThunkCreator(31568) },[props.status])  


/* useEffect(()=>{
  if (prevProps.status!==status) {
    setState({status:status});  
  }
},[prevProps, prevState]) */



/* isVisibleInput =() => {
  setState({isVisibleInput: true})

} */

let onStatusChange=(e)=>{
setStatus(e.currentTarget.value) }  ;


/* onBlured = ()=>{
   this.setState({isVisibleInput: false});   
  this.props.putStatusThunkCreator(state.status); 
} */

  return (<div>
 {isVisibleInput 
?
  <div> <input onChange={(e)=>
    {setStatus(e.currentTarget.value)}}
    
    
    autoFocus={true} onBlur={()=> {setIsVisibleInput(false);
     props.putStatusThunkCreator(status)} } 
  value={status}/> </div>
:<span onClick={ ()=> { setIsVisibleInput(true) } }> {props.status==='' ? 'Нет статуса' : props.status }</span>
  }
</div>)
}



export default StatusContainerHooks 


