import React, { useEffect } from "react";
import { Watch } from "react-loader-spinner";
import { connect } from "react-redux";




const Load = (props) => { 
/*   useEffect(()=>
    {props.letLoading(props.isLoading)},[props.isLoading]
  ) */
  

  return (
    <div>
       {props.isLoading===true ?
      <div>
        <Watch
       /*  style={{display: "block",position:"fixed", zIndex:"30"}} */
          wrapperStyle={{position:"fixed", zIndex:"2", left:"500px",top:"10px"}}
         color="#000000"
        />
      </div>
    :  
    <div></div>
    }

    </div>
)}

let mapStateToProps = (state) => {
  return{
    isLoading:state.load.isLoading

  }}



export default connect(mapStateToProps)(Load)
