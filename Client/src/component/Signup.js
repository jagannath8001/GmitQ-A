import React from 'react';
// import  './assets/css/signup.css';


const Signup = () => {
     
      return (
        <>

<div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    <div class="color">
    
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    </div>
    <input type="submit" name="signup_submit" class="btnl" value="Sign me up" />
  </div>
  
  
  <div class="or"><b>OR</b></div>
  <div class="right">
    <span class="loginwith">Sign in with social network</span>
    <button class="social-signin facebookk">Login with facebook</button>
    <button class="social-signin twitterr">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
</div>
      
        </>
      );
}
export default Signup;