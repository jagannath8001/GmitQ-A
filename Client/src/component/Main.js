import React from 'react';

import {Form,Col, Button} from 'react-bootstrap';



const Main = () => {
      return (

          <>
            <div className="form-main">
              <div className="icon">
               <img src="img/quora (1).png" height="100px" width="150px" alt=""></img>
               </div>
               <div >
               {/*
              <Form>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Login</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Label></Form.Label>
               <Form.Control type="password" placeholder="Password" />
                <Form.Check type="checkbox" label="Check me out" />
               <br/>
               <Button variant="primary" type="submit">
                Submit
                </Button>
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridPassword">
                <button class="social-signin facebook">Log in with facebook</button>
                 <div className="google">
                 <a href="#">
                 <img src="img/google_icon.png" height="20px" width="20px" alt=""></img> 
                  Continue ... Google
                  </a>
                  </div> 
                  <br/>
                  <div className="google">
                  <a href="#">
                   <img src="img/facebook.jpg" height="20px" width="20px" alt=""></img> 
                  Continue ... facebook
                  </a>
                  
                  </div>
                   <br/>
                    <p>By continuing
                    you indicate that you have read and agree to Quora's Terms of Service and Privacy Policy.</p>
           
           
                   </Form.Group>
                   
                   </Form.Row>
                </Form> */}
                


                <Form>
                <div id="login-box">
        <div class="left">
    <h1>Login</h1>
    <div class="color">
    
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    </div>
    <input type="submit" name="login_submit" class="btnl" value="Login" />
  </div>
  
  <div class="right">
    <span class="loginwith"><b>Sign in with<br />social network</b></span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google</button>
  </div>
  <div class="or">OR</div>
</div>
</Form>
         </div>
        
        
         </div>
            
         </>
      );
    };
    
export default Main;