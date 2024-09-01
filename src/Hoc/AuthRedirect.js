import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
     isLogined:state.auth.isLogined,
    })

export const authRedirect = (Component) => {

    class RedirectComponent extends React.Component {

    render () { if(!this.props.isLogined) {return <Navigate to="/Login"/>}
    return <Component  {...this.props}/>
     }}
     return connect(mapStateToPropsForRedirect)(RedirectComponent)
}






