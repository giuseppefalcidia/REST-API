const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Middlewares
//app.use('/posts', () => {
 //   console.log("This is a middleware running");
// })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Import Routes
const postsRoute = require('./routes/posts');
// import it and use it as a middleware
app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send("We are on home");
})


//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION, 
{ useNewUrlParser: true }, 
() => {
    console.log("Connected to DB!")
})


// listening to the server
app.listen(3000);