import React, {useState,useContext} from 'react';
import {  useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import  './assets/css/login2.css';
import {Link} from "react-router-dom";
import quorak from "../img/quorak.png";
import backmain1 from "../img/backmain1.jpg";
import {CircularProgress} from "@material-ui/core"



const Login2 = () => {

	const history = useHistory();
	const [user,setUser] = useState({
		name:"", email:"", password:"", cpassword:""
	    });

	    let name, value;
	    const handleInputs = (e) =>{
		console.log(e);
		name = e.target.name;
            value = e.target.value;
		setUser({...user, [name]:value});
		
	  
	    }
	    const PostData = async (e) => {
		e.preventDefault();
		const {name, email, password, cpassword } = user;
	 
		const res = await fetch("/register", {
		  method:"POST",
		  headers: {
		    "Content-Type"  : "application/json"
		  },
		  body:JSON.stringify({
		   name, email, password, cpassword
	 
		  })
	 
		});
		const data = await res.json();
	 
		if(data.status === 422 || !data){
		  window.alert("invalied registristion");
		  console.log("invalied registristion");
		}else {
		 window.alert("successfuly registristion");
		 console.log("successfuly registristion");
	 
		 history.push("/login");
		}
	   }





	   const {state, dispatch} = useContext(UserContext);

	// const history = useHistory();

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



	window.onload=function(){
		let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');

 signUpButton.addEventListener("click", function () {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", function () {
	container.classList.remove("right-panel-active");
});
	    }
	

    
   
     
      return (
		
        <>
	  <div style={{ backgroundImage: `url(${backmain1})`}}>
	  
            <div>
		<div className="Quora">
		<img className="" height="100px" width="150px" src={quorak} alt=" pic"/>
		
		</div>
		{/* <img className="" height="100px" width="150px" src={backmain} alt=" pic"/> */}
<div className="container" id="container">

	<div className="form-container sign-up-container">
		<form action="auth" method="POST">
			<h1>Create Account</h1>
			<div className="social-container">
			<Link as={Link} to = "/" ><i className="fab fa-facebook-f"></i></Link>
			<Link as={Link} to = "/" ><i className="fab fa-google-plus-g"></i></Link>
			<Link as={Link} to = "/" ><i className="fab fa-linkedin-in"></i></Link>
			</div>
			<span>or use your email for registration</span>
			<input   type="text" placeholder="Name"  name="name" id="name" 
			 value={user.name}
                   onChange={handleInputs}
                   autoComplete="off" 
			 />
			<input   type="email" placeholder="Email" name="email"  id="email" 
			value={user.email}
                  onChange={handleInputs}
			autoComplete="off" />
			<input   type="password" placeholder="Password" 
			name="password" 
			id="password" 
			 value={user.password}
                   onChange={handleInputs}
			autoComplete="off"
			 />
			<input   type="cpassword" placeholder="Re-Password" 
			name="cpassword" 
			id="cpassword" 
			value={user.cpassword}
                  onChange={handleInputs}
			autoComplete="off" />
			<button type="submit" name="signup_submit"  id="signup"  value="Sign  up" onClick={PostData} >Sign Up
			</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="auth" method="POST">
			<h1>Sign in</h1>
			<div className="social-container">
			<Link as={Link} to = "/" ><i className="fab fa-facebook-f"></i></Link>
			<Link as={Link} to = "/" ><i className="fab fa-google-plus-g"></i></Link>
			<Link as={Link} to = "/" ><i className="fab fa-linkedin-in"></i></Link>
			</div>
			<span>or use your account</span>

			<input type="email" name="email" id="email" 
								    value={email}
								    onChange={(e) => setEmail(e.target.value)

			                                   }
								    autoComplete="off"  placeholder="Email"  />

			<input type="password" name="password" id="password" 
									value={password}
									onChange={(e) => setPassword(e.target.value)
  
									 } autoComplete="off" placeholder="Password" />
			<a href="#">Forgot password?</a>
			<button onClick={loginUser}>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
            </div>
		</div>
		
        </>
	  
      );
	
}
export default Login2;