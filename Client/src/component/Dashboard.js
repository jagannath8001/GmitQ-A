import React from 'react';
import './assets/css/dashboard.css';
import Rightbar from './Rightbar';
import {Link} from "react-router-dom";
import { Nav,Dropdown,Button,Modal,Toast } from 'react-bootstrap';
import quoraicon from "../img/quoraicon.jpg";
import profileicon from "../img/profileicon.png";
import poster from "../img/poster.png";
import postquora from "../img/postquora.png";
import datagrip from "../img/datagrip.png";
import textbooks from "../img/textbooks.jpg";
import travel from "../img/travel.jpg";
import coding from "../img/coding.jfif";
import busi from "../img/busi.jpg";
import food from "../img/food.jpg";
import anss from "../img/anss.jpg";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from '@material-ui/icons/Add';


const Dashboard = () => {
    

  
     
      return (
        <>
                    <div className="dashboard">
                        {/*  */}

                        {/* <!----------------Nav bar start--> */}


                            <div className="right-side">
                                <div className="right-header">
                                    <div className="top-bar">
                                        <div className="top-bar-justify">
                                            <div className="quora-icon">
                                                <img  src={quoraicon} alt=" pic"/>
                                            </div>
    
                                            <div className="form has-search">
                                                <input className="text" type="search" placeholder="Search here..." name="search" />
                                                    <span className="searchIcon">
                                                        <img src="https://i.ibb.co/sqFgRq8/search.png" />
                                                    </span>
                                            </div>

                                            <div className="top-bar-items">
                                                <div className="notif-nav">
                                                        {/* <!-- <div className="online pink">
                                                                </div> --> */}
                                                        <div className="profile2-nav">
                                                        <img src="https://i.ibb.co/VJm73Hz/notifications-button.png" />
                                                        </div>
                                                </div>
                                                    
                                                    <img src="https://i.ibb.co/52Vkq4M/earth-globe.png" />
                                                    
                                                    <div className="profile2-nav">
                                                        <img  src={anss} alt=" pic" />
                                                        
                                                    </div>
                                                    
                                                    <div> 
                                                        <button className="icon-name5" value="">Add Question
                                                        </button>
                                                    </div>
                                        
                                                 
                                                    <Dropdown>
                                                    <Dropdown.Toggle variant="none">
                                                    <img  src={profileicon} alt=" pic" height="25px" width="25px"/>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Nav.Link as={Link} to = "#" >Dark Mode</Nav.Link>
                                                        <Nav.Link as={Link} to = "/logout" >Logout</Nav.Link>
                                                        <Nav.Link as={Link} to = "#" >Seetings</Nav.Link>
                                                        <Nav.Link as={Link} to = "#" >Help</Nav.Link>
                                                    </Dropdown.Menu>
                                                    </Dropdown>
                                                    

                                                   
                                                    
                                            </div>

                                            <div className="right-bottom">
                                                <div className="check">
                                                    {/* <!-- <label className="checkbox">
                                                        <input type="checkbox"/>
                                                        </label> --> */}
                                                    {/* <!-- <div className="down-arrow">
                                                            <img src="https://i.ibb.co/WDqrXj6/drop-down-arrow.png" />
                                                            </div> --> */}
                                                </div>
                                                <div className="middle-buttons">
                                                    <div className="buttons">
                                                    </div>
                                                    {/* <div className="form has-search">
                                                    <input className="text" type="search" placeholder="Search here..." name="search" />
                                                    <span className="searchIcon">
                                                        <img src="https://i.ibb.co/sqFgRq8/search.png" />
                                                        </span> 
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                

                            


                                {/* <!----------------Navbar end--> */}


                               

                                

                            {/* <!----------------Main  start--> */}
                            <div className="scroll-message">
                                                {/* <!-- <div className="card">--> */}
                                <div className="message">
                                                    <div className="">
                                                    <img  src={profileicon} alt=" pic" height="50px" width="50px"/>
                                                     
                                                        
                                                    </div>
                                                    <div className="title">
                                                    Which are some of the best pictures that make us proud as Indians?
                                                    <div className="title-icons">

                                                    </div>
                                                    </div>
                                                    <div className="from">
                                                    <span className="who">Name: </span>sumon pal
                                                    <br></br>
                                                    <a href="#" >Follow</a>
                                                    </div>
                                                     <div className="mes-date">
                                                    jun 7, 2021
                                                    </div>
                                                    <div className="message-from">
                                                    <p> I am sure this will make us all proud. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas pariatur repellat veritatis
                                                        atque, tempora quasi quas facere impedit aliquam libero qui iure cumque incidunt facilis soluta
                                                        necessitatibus laboriosam nemo. Delectus architecto
                                                        sed, excepturi natus iste vel quidem officia corrupti repudiandae!</p>
                                                        <img  src={poster} alt=" pic" height="400px" width="800px"/>
                                                    </div>
                                                    
                                                    

                                                    <hr/>
                                                    <button className="btn2 butona"> Comment
                                                    <span className="tag">
                                                        <img src="https://i.ibb.co/GQf8frw/reply.png" />
                                                    </span>
                                                    </button>

                                                    <button className="btn2 butonb"> Share
                                                    <span className="tag">
                                                        <img src="https://i.ibb.co/6W40kTg/forward-arrow.png" />
                                                    </span>
                                                    </button>
                                                    <button className="btn2 butonl">
                                                    <ThumbUpAltIcon />
                                                    </button>
                                                    <button className="btn2 butond">
                                                    <ThumbDownIcon />
                                                    </button>
                                                    
                                                </div>

                                                <div className="message">
                                                  <div className="">
                                                    <img  src={profileicon} alt=" pic" height="50px" width="50px"/>
                                                        
                                                    </div>
                                                    <div className="title">
                                                    Old Fashioned Recipe For Preventing Allergies And Chemical
                                                    <div className="title-icons">

                                                    </div>
                                                    </div>
                                                    <div className="from">
                                                    <span className="who">Name: </span>Rahul Mondal
                                                    <br></br>
                                                    <a href="#" >Follow</a>
                                                    </div>
                                                    <div className="mes-date">
                                                    jan 12, 2021
                                                    </div>
                                                    <div className="message-from">
                                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas pariatur repellat veritatis
                                                        atque, tempora quasi quas facere impedit aliquam libero qui iure cumque incidunt facilis soluta
                                                        necessitatibus laboriosam nemo. Delectus architecto
                                                        sed, excepturi natus iste vel quidem officia corrupti repudiandae!</p>
                                                        <img  src={postquora} alt=" pic" height="200px" width="800px"/>
                                                    </div>
                                                    
                                                    

                                                    <hr/>
                                                    <button className="btn2 butona"> Comment
                                                    <span className="tag">
                                                        <img src="https://i.ibb.co/GQf8frw/reply.png" />
                                                    </span>
                                                    </button>

                                                    <button className="btn2 butonb"> Share
                                                    <span className="tag">
                                                        <img src="https://i.ibb.co/6W40kTg/forward-arrow.png" />
                                                    </span>
                                                    </button>
                                                    <button className="btn2 butonl">
                                                    <ThumbUpAltIcon />
                                                    </button>
                                                    <button className="btn2 butond">
                                                    <ThumbDownIcon />
                                                    </button>
                                                    
                                                </div>
                                                <div className="message">
                                                    <div className="">
                                                    <img  src={profileicon} alt=" pic" height="50px" width="50px"/>
                                                     
                                                        
                                                    </div>
                                                    <div className="title">
                                                    DataGrip, a powerful GUI tool for SQL.
                                                    <div className="title-icons">

                                                    </div>
                                                    </div>
                                                    <div className="from">
                                                    <span className="who">Name: </span>JetBrains
                                                    <br></br>
                                                    <a href="#" >Follow</a>
                                                    </div>
                                                     <div className="mes-date">
                                                    feb 25, 2021
                                                    </div>
                                                    <div className="message-from">
                                                    <p> Smart code completion, on-the-fly analysis, quick-fixes, refactorings that work in SQL files, and more.</p>
                                                        <img  src={datagrip} alt=" pic" height="400px" width="800px"/>
                                                    </div>
                                                    
                                                    

                                                    <hr/>
                                                    <button className="btn2 butona"> Comment
                                                    <span className="tag">
                                                        <img src="https://i.ibb.co/GQf8frw/reply.png" />
                                                    </span>
                                                    </button>

                                                    <button className="btn2 butonb"> Share
                                                    <span className="tag">
                                                        <img src="https://i.ibb.co/6W40kTg/forward-arrow.png" />
                                                    </span>
                                                    </button>
                                                    <button className="btn2 butonl">
                                                    <ThumbUpAltIcon />
                                                    </button>
                                                    <button className="btn2 butond">
                                                    <ThumbDownIcon />
                                                    </button>
                                                    
                                                </div>
                                                
                                            </div>

                                            

                                         {/* <!----------------Main end --> */}



                                         </div>      


                                        <div className="space">
                                         <Modal.Dialog>
                                        <Modal.Header >
                                            <Modal.Title>Create Space<AddIcon/></Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                                    <div className="createspace">
                                                        <img  src={busi} alt=" pic"/>
                                                        Business
                                                        
                                                    </div>
                                                    <br></br>
                                                    <div className="createspace">
                                                        <img  src={textbooks} alt=" pic"/>
                                                        Books
                                                        
                                                    </div>
                                                    <br></br>
                                                    <div className="createspace">
                                                        <img  src={travel} alt=" pic"/>
                                                        Travle
                                                        
                                                    </div>
                                                    <br></br>
                                                    <div className="createspace">
                                                        <img  src={food} alt=" pic"/>
                                                        Food
                                                        
                                                    </div>
                                                    <br></br>
                                                    <div className="createspace">
                                                        <img  src={coding} alt=" pic"/>
                                                        Coding
                                                        
                                                    </div>
                                           

                                            
                                        </Modal.Body>

                                        </Modal.Dialog>





                                       
                                        </div>
                            

                                       
                    </div>
                   
                    
                    
                        
        </> 
      );
}
export default Dashboard;

