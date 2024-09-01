import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
const Header = (props) => { 
  return (<header className={s.Header}> <img src="https://sun9-67.userapi.com/c844721/v844721600/12813f/IOTsEqFrmZY.jpg"/> 
  <div className={s.login_block}>
<NavLink to="/Login">{props.login}</NavLink>
  </div>
  
  </header>
)}
export default Header;