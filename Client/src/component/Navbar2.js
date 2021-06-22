import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import qicon from "../img/qicon.png";


const Navbar2 = () => {
      return(
      
      <>
      <Navbar collapseOnSelect expand="sm" bg="" variant="light">
        <Navbar.Brand href="#home"><img className=""height="20px" width="20px" src={qicon} alt=" pic"/><b>-uora</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto"> 
        </Nav>
        <Nav>
        <Nav.Link as={Link} to = "/about" >About</Nav.Link>
       <Nav.Link as={Link} to = "/dashboard" >Dashboard</Nav.Link>
      <Nav.Link as={Link} to = "/logout" >Logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
       
      </>
      );  
  }
export default Navbar2;