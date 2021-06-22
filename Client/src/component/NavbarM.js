import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import { UserContext } from '../App';


const NavbarM = () => {
  const {state, dispatch} = useContext(UserContext);

  const  RenderMenu = () => {
    if (state) {
      return (
        <>
        {/* <Navbar2/> */}

        </>
      )
    } else {
      return (
        <>
        
        {/* <Navbar1/> */}
        

        </>
      )
    }
  }

      return(
      
      <>
      <RenderMenu/>
     
      {/* <Navbar collapseOnSelect expand="sm" bg="" variant="light">
        <Navbar.Brand href="#home"><img className=""height="20px" width="20px" src={qicon} alt=" pic"/><b>-uora</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto"> 
        </Nav>
        <RenderMenu/>
        </Navbar.Collapse>
      </Navbar> */}
      </>
      );  
  }
export default NavbarM;