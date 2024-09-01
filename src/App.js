import React, { lazy, Suspense }from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/Nav';
import Content from './Components/Content/Content';
import News from './Components/News/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import UsersContainer from './Components/Users/UsersContainer'; */
import ContentContainer from './Components/Content/ContentContainer';
import HeaderConteiner from './Components/Header/HeaderConteiner';
import LoginPage from './Components/Login/LoginPage';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Load from './Components/Load/Load';
import { Provider } from 'react-redux';
import store from "./0Redux/0redux-store";
import { Watch } from "react-loader-spinner";



const App = (props) => {
  const UsersContainer = lazy(()=>import('./Components/Users/UsersContainer'))
  return (

<BrowserRouter>
<Provider store={store} > 
    <div className="app-wrapper">
      
      <HeaderConteiner isLoading={store.getState().usersPage.isLoading}/>
      <Nav />
      <div className='content'>
        <Routes className="inside">
 <Route path="/Profile/*" element={<ContentContainer />} />
 {/* <Route path="/Profile/*" element={<Content />}/>  */}
 <Route path="/Messeges/*" element={<DialogsContainer store={store} />} />

 {!store.getState().usersPage.isLoading && <Route path="/Users/" element={
  <Suspense  fallback={<Watch/>} > 
    <UsersContainer />
 </Suspense>
  
  
  } />}
 <Route path="/Login/" element={<LoginPage />} />
        </Routes>
      </div>
    </div> 
    </Provider> 
    </BrowserRouter>
    )
}




export default App

