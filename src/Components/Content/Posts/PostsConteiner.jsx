import React from 'react'; 
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../0Redux/content-reducer'; 
import Posts from './Posts';
import { connect } from 'react-redux';


 let mapStateToProps=(state)=> {
  return{
newPostText : state.profile.newPostText,
postData: state.profile.postData
  }}

let mapDispatchToProps=(dispatch)=> {
  return{

addPost: (newPost) => 
{dispatch(addPostActionCreator(newPost));},

changePostText : (text) => 
{let action = updateNewPostTextActionCreator (text);
dispatch(action)}
}}


export default connect(mapStateToProps,mapDispatchToProps)(Posts); 

















/*   const PostsContainer = () => {
return


{<StoreContext.Consumer>{ 
    (store) =>  {  */
    /*   let state=store.getState() */
      
/* let addPost = () => {
store.dispatch(addPostActionCreator());}

let onPostChange = (text) => {
       let action = updateNewPostTextActionCreator (text); 
store.dispatch(text)}
}
return */
/* <div>
{store.getState().posts.postData}
<Posts  
addPost={addPost} 
changePostText={onPostChange} 
newPostText={store.getState().posts.newPostText} 
postData={store.getState().posts.postData}/>
</div>
}}
</StoreContext.Consumer>
)} */