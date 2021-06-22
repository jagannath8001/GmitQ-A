import React, { createContext,useReducer } from 'react'
import './App.css';
import {Switch,Route,} from "react-router-dom";

import NavbarM from './component/NavbarM';
import About from './component/About';
// import Footer from './component/Footer';
import Login2 from './component/Login2';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Logout from './component/Logout';
// import Rightbar from './component/Rightbar';

import {initialState, reducer} from "../src/reducer/UseReducer";


 //Conrext APi
 export const UserContext = createContext();

const Routing  = () => {
  return(
   
    <Switch>
  
    
    <Route  exact path="/">
    <Login2/>
    </Route>
 
    <Route path="/about">
    <About/>
    </Route>
 
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/dashboard">
    <Dashboard/>
    </Route>
 
    <Route path="/logout">
    <Logout/>
    </Route>
    </Switch>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <>
   <UserContext.Provider value={{state, dispatch}}>
     <NavbarM/>
     <Routing/>

   </UserContext.Provider>
   
   </>
  );
}

export default App;
