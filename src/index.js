import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./0Redux/0redux-store";
import { Provider } from 'react-redux';
import StoreContext from './StoreContext';
/* import state, { subscribe, addPost, updateNewPostText } from "./Redux/state" */
/* import {rerenderEntireTree} from "./render" */

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {

/*   setInterval(()=>{store.dispatch({type:'FAKEusers'})},2000) */

  root.render(
    <App/>
    /*   <BrowserRouter> */
 /*  <Provider store={store} >  */
    
     /*  <Provider store={store}/> */
      /* Важная штука Bind без нее не работает!!!*/
   /*    <StoreContext.Provider value={store}/> */
   
 /*    <App store={store} dispatch={store.dispatch.bind(store)} */
 /*    </Provider>  */
   /*  </BrowserRouter> */
  
  )

  } 
rerenderEntireTree(store);



/* store.subscribe( () => {
  let state= store.getState();
  rerenderEntireTree(state) ;
}) */

