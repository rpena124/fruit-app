// Requie modules ( should always be at the top)
require('dotenv').config()

// required modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express() // Create our express application
const cors = require('cors')//lets us know who is allowed 

// Needt his line of code to allow us to process and read form data
app.use(express.urlencoded({ extended: true })) // this code allows us to have req.body, this is our body parser middleware
app.use(cors())//Allowing access 
// Before everysingle single callback, we are going to store this empty object in an
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// this is what allows us to use the view engine
app.engine('jsx', require('jsx-view-engine').createEngine()) // when we 'require()' we are pulling in the code from somwhere else, which has a methdod called 'createEngine()' to make the function
// app.set('views', './views') // specify the views directory, it will atuomatically do this
app.set('view engine', 'jsx') // register the jsx view engine

// once we have the connection we are going to listen for a connection
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

//= ============ Mount our middleware using (app.use)======

/* Start Middleware */

app.use(methodOverride('_method'))

//use to create an API
app.use(express.json())

// we aer going to statically show whats in public
app.use(express.static('public'))


// link the controller files, needs to be below the middle ware
//setting up local host 300 as the entry point for out routes
app.use('/fruits', require('./controllers/routeController'))
/* End Middleware */

app.use('/user', require('./controllers/authController'))
//= ============== Mount our Routes ==================

// Tell the app to listen on a port
app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// INDUCES
