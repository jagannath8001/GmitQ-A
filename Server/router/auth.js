const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authenticate = require("../middleware/Authenticate");

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req,res)=>{
      res.end('Hello World router.js');
});



//using promiss

// router.post('/register', (req,res) =>{

//       const { name, email, phone, work, password, cpassword} = req.body;

//       if(!name || !email || !phone || !work || !password || !cpassword){
//             return res.status(422).json({error: "plz fill the field"});
//       }

//       User.findOne({email:email})
//             .then((Userexist)=>{
//                 if(Userexist){
//                return res.status(422).json({error: "Email Alredy Exits"});
//             }
//             const user = new User({name, email, phone, work, password, cpassword});

//             user.save().then(() => {
//                   res.status(201).json({massege: "user registered successsfuly"});

//             }).catch((err) => res.status(500).json({error: "field register"}));

//       }).catch(err => {console.log(err); });



// });




// Async Await

router.post('/register', async (req,res) =>{

      const { name, email, password, cpassword} = req.body;

      if(!name || !email || !password || !cpassword){
            return res.status(422).json({error: "plz fill the field"});
      }

      try{
            const Userexist = await User.findOne({email:email});

            if(Userexist){
                  return res.status(422).json({error: "Email Alredy Exits"});
               }else if(password != cpassword){
                  return res.status(422).json({error: "Password Not Macthing"});
               }else {
                  const user = new User({name, email, password, cpassword});

                  //hasing password
   
   
                   await user.save();
                   res.status(201).json({massege: "user registered successsfuly"});
               }
    

      }catch(err){
            console.log(err);

      }

});


//login 

router.post('/signin', async (req,res) => {
      // console.log(req.body);
      // res.json({message:"assowam"});
      try{
            const { email, password } = req.body;
            if(!email || !password) {
                  return res.status(400).json({error: "plz fill the data"})
            }

            const userLogin = await User.findOne({email: email});

            if (userLogin){
                  const isMach = await bcrypt.compare(password, userLogin.password);

                  //token
                  const token = await userLogin.generateAuthToken();
                  console.log(token);

                  res.cookie("jwttoken", token, {
                        expires:new Date(Date.now() + 258920000),
                        httpOnly:true
                  });
                  

            // console.log(userLogin)
            if(!isMach) {
                  res.status(400).json({error: "Invalid Credientials pass"});
            }else {
                  res.json({message: "user signin successfuly"});
            }

            }else{
                  res.status(400).json({error: "Invalid Credientials"});
            }
    

      }catch (err) {
            console.log(err);
      }

});

//about page
router.get('/about', Authenticate ,(req,res)=>{
     console.log(`Hello My About Page`);
      res.send(req.rootUser);

});
//get user data for contuctus and home page
router.get('/getdata', Authenticate, (req, res) => {
      console.log('Hello my cotuct page');
      res.send(req.rootUser);
});


//contact page
router.post('/contact', Authenticate, async (req, res) => {
      try {
            const {name, email, phone, message} = req.body;
            if(!name || !email || !phone || !message) {
                  console.log("error in contact from");
                  return res.json({error:"Plz field the contact form"});

            }

            const userContact = await User.findOne({_id: req.userID});
            if (userContact) {
                  const userMessage = await userContact.addMessage(name, email, phone, message );
                  await userContact.save();
                  res.status(201).json({message:" user contact successfuly"});
            }


      } catch (error) {
            console.log(error);
      }
      
});















//logout page
router.get('/logout', (req,res)=>{
      console.log(`Hello My logout Page`);
      res.clearCookie('jwttoken', {path:'/'});
       res.status(200).send('user logout');
 
 });

module.exports = router;
