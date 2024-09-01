/* import {rerenderEntireTree} from "./../render" */
import dialogsReducer from "./dialogs-reducer.js";
import contentReducer from "./content-reducer.js";
import newsReducer from "./news-reducer.js";
/* 
const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
export const addPostActionCreator = () => { return{
  type: ADD_POST
}} ;
export const updateNewPostTextActionCreator = (text) => { return{
  type: UPDATE_NEW_POST_TEXT, text: text
}} ;
export const addMessageActionCreator = () => {return {
  type : ADD_MESSAGE
  }}
export const updateNewMessageTextCreator = (textMessage) => { return {
  type: UPDATE_NEW_MESSAGE_TEXT, textMessage:textMessage
}}
 */

let store= {
 _callSubscriber () {},
 _state: {

dialogs: {
contactsData: [
    {id:1,name:'Дмитрий'},
     {id:2,name:'Олег'},
     {id:3,name:'Ирина'}
   ],
   
textsData:[
    {id:1,text:'Привет!'},
    {id:2,text:'Хай'},
    {id:3,text:'Как дела?'}
 ],

 newTextMessage:'31',
},

posts: {

 postData: [
  {id:1 ,message:'ЭЙ!!!', likes:20 },
  {id:2 ,message:'privet', likes:41 },
  {id:3 ,message:'kag dila?', likes:56 },
  {id:4 ,message:'Mnnee horoho!!', likes:34 },
  {id:5 ,message:'kleeva!', likes:10 },
  {id:5 ,message:'kleeva!', likes:10 },],

  newPostText:'2'
},


news:
{news:[
  {date: '27.07.2024', oneNews: 'Слон слониху звал поплавать'},
  {date: '26.07.2024', oneNews: 'Слон орлиху звал летать'},
  {date: '25.07.2024', oneNews: 'Кит кукушку звал смеяться'}] }
},
getState () {return this._state},
subscribe (observer)  {
  this._callSubscriber=observer;},
  


/* addPost() { 
},


updateNewPostText (newText) {

  this._state.posts.newPostText = newText;
  this._callSubscriber(this._state);
  }, */

  dispatch (action) {
    this._state.posts=contentReducer (this._state.posts, action);
    this._state.dialogs=dialogsReducer (this._state.dialogs, action);
    this._state.dialogs=newsReducer (this._state.dialogs, action);
    this._callSubscriber(this._state);
  }







 /*  dispatch (action) {
if (action.type === 'ADD-POST') {
  let newPost={
    id:5, 
    message: this._state.posts.newPostText, 
    like:0}
  
    this._state.posts.postData.push(newPost);
    this._state.posts.newPostText='';
    this._callSubscriber(this._state);}

else if (action.type === 'UPDATE-NEW-POST-TEXT') {
  this._state.posts.newPostText = action.text;
  this._callSubscriber(this._state);}

  else if (action.type === 'ADD-MESSAGE') {
    let newMessage={
      id:5,
      text:this._state.dialogs.newTextMessage}
      this._state.dialogs.textsData.push(newMessage);
      this._state.dialogs.newTextMessage='';
      this._callSubscriber(this._state);
  }

else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
  this._state.dialogs.newTextMessage = action.textMessage;
  this._callSubscriber(this._state);
}
} */


}

export default store;

window.store=store;
