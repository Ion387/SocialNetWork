import contentReducer from './content-reducer'
import dialogsReducer from './dialogs-reducer'
import newsReducer from './news-reducer'
import { configureStore} from "@reduxjs/toolkit";
import { combineReducers, compose, createStore} from "redux";
import usersReducer from './users-reducer';
import authReducer from './Auth-reducer';
import loginReducer from './login-reducer';
import loadReducer from './Load-Reducer';
import paginatorReducer from './paginator-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

let store = configureStore ({
  reducer:{
    profile: contentReducer,
    dialogs: dialogsReducer,
    news: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    login:loginReducer,
    load:loadReducer,
    paginator:paginatorReducer
  },
 



}) 

window.store=store;


/* let reducers=combineReducers({
  posts: contentReducer,
  dialogs: dialogsReducer,
  news: newsReducer,
  
});

let store=createStore(reducers);
 */





export default store;