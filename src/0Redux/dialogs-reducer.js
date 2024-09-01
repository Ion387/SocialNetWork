const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
export const addMessageActionCreator = () => {return {
  type : ADD_MESSAGE
  }}
export const updateNewMessageTextCreator = (textMessage) => { return {
  type: UPDATE_NEW_MESSAGE_TEXT, textMessage:textMessage
}}

const initialState ={
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
 isLoading:false,

}
const dialogsReducer =(state=initialState, action)=> {


  switch (action.type) {
  
  case'ADD-MESSAGE': 
     /*  let newMessage={
      id:5,
      text:state.newTextMessage}; */
      return {
        ...state,
        newTextMessage:'',
        textsData:[...state.textsData, {id:5,
          text:state.newTextMessage}],}
       

  case 'UPDATE-NEW-MESSAGE-TEXT': 

 /*    stateCopy.newTextMessage = action.textMessage; */
  return{ ...state,
    newTextMessage: action.textMessage} 



  default: return state
    }}

export default dialogsReducer
