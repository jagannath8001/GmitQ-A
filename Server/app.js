const dotenv = require("dotenv");
const express = require('express'); 
const app = express();

const cookieParser = require('cookie-parser')


dotenv.config({ path: './config.env'});
require('./db/conn');
// const User = require('./model/userSchema');
app.use(express.json());
app.use(cookieParser())


app.use(require('./router/auth'));

const PORT = process.env.PORT;



//Middlewere

const middlewere = (req, res, next) => {

      console.log("hello my middlewere");
}


app.get('/', (req, res) => {
      res.send(`Hello World From The Server`);
});


// app.get('/about', middlewere, (req, res) => {
//       res.send(`Hello World From The about`);
// });

app.listen(PORT, () => {
      console.log(`server is running in port ${PORT}`);
})
