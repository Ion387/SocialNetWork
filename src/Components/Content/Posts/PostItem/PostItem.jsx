import React from "react";
import s from './PostItem.module.css';
const PostItem= (props) => { return ( 

<div className={s.item}> 

<img className={s.item} src="https://pp.userapi.com/c622425/v622425225/140cc/OHoKDTfEqaE.jpg"/> 

<span className={s.text}>{props.message}</span>
<p className={s.like}>likes {props.likesCount}</p> 
</div>
 )}
  
  export default PostItem;