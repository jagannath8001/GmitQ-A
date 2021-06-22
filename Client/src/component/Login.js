import React, { useState,useContext} from 'react';
import {  useHistory } from 'react-router-dom';
import  './assets/css/login.css';
import bg from "../img/bg.svg";
import wave from "../img/wave.png";
import avatar from "../img/avatar.svg";
import qi from "../img/qi.png";
import { UserContext } from '../App';
import { Navbar,Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
// import  './login.css';


const Login = () => {

	const {state, dispatch} = useContext(UserContext);

	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const loginUser = async (e) => {
		e.preventDefault();

		const res = await fetch('/signin', {
			method:"POST",
			headers: {
				"Content-Type"  : "application/json"
			    },
			    body:JSON.stringify({
			     email, 
			     password
		   
			    })
		});
		const data = res.json();

		if(res.status === 400 || !data){
			window.alert("invalied Credentionlal");
		    }else {
			    dispatch({type:"USER", payload:true})
		     window.alert("successfuly login");
	     
		     history.push("/Dashboard");
		    }

	}



	
// 	window.onload=function(){
// 		const inputs = document.querySelectorAll(".input");
  
  
//   function addcl(){
// 	  let parent = this.parentNode.parentNode;
// 	  parent.classList.add("focus");
//   }
  
//   function remcl(){
// 	  let parent = this.parentNode.parentNode;
// 	  if(this.value === ""){
// 		  parent.classList.remove("focus");
// 	  }
//   }
  
  
//   inputs.forEach(input => {
// 	  input.addEventListener("focus", addcl);
// 	  input.addEventListener("blur", remcl);
//   });
// 	    }
	

    
   
     
      return (
        <>
            <div>
              <img className="wave" src={wave} alt="wave pic"/>

                  <div 
			className="containerlogin">
		            <div 
				className="img">
			          <img src={bg} alt="register pic"/>
		            </div>
		            <div 
				className="login-content">
			            <form action="auth" method="POST">
				            <img src={qi} alt="avtar pic"/>
				            <h3 
						>Welcome</h3>
           		                  <div 
						     className="input-div one">
           		                        <div 
							     className="i">
           		   		               <i 
								     className="fas fa-user"></i>
           		                        </div>
							     <input type="email" name="email" id="email" 
								    value={email}
								    onChange={(e) => setEmail(e.target.value)

			                                   }
								    autoComplete="off"  placeholder="Email"  />
           		                  </div>
           		                  <div 
						     className="input-div pass">
           		                        <div 
							     className="i"> 
           		                        	<i 
								     className="fas fa-lock"></i>
           		                        </div>
							     <input type="password" name="password" id="password" 
									value={password}
									onChange={(e) => setPassword(e.target.value)
  
									 } autoComplete="off" placeholder="Password" />
            	                  </div>
						<div 
						className="forgetpassword">
            	                  
						<Nav.Link as={Link} to = "/" >Create a New Account</Nav.Link>
						
						</div>
            	                  <input type="submit" 
						className="btnl" id="signin" value="Login"
						onClick={loginUser}></input>
                              </form>
                        </div>
                  </div>
            </div>
        </>
      );
}
export default Login;
