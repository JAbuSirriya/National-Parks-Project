//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const session = require('express-session')
require('dotenv').config();

//___________________
//Middleware
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ 'project_2';
// Connect to Mongo
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true});
//___________________
//Database
//___________________



// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form



//LOGIN AND SIGN UP/SESSIONS MIDDLEWARE
app.use(
    session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )


//CONTROLLER
const parksController = require('./controllers/parks_controller.js');
app.use("/", parksController);
const userController = require('./controllers/users_controller.js')
app.use('/users', userController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;



// // open the connection to mongo
// db.on('open' , ()=>{});




//___________________
// Routes
//___________________



app.get('/', (req, res) => {
    res.redirect('/parks')
})


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));