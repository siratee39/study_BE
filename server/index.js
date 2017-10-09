// express lib == import express from express
//front-end use import.... form
const express = require('express')
const app = express()

// route handler
// app:app obj | get 
// req: incoming req | res outgoing res
app.get('/', (req,res) => {
  res.send({ hi: 'there'})
})

//// Deployment //

///  1.Dynamic Port Binding : 
//  Heroku tells us which port our app will use
// -> need to make sure to listen to the port they tell

// look at undrlying environent variable and 
//    see if they declared a port us to use
// if there is an envi. variable that has been already
//    defined by Heroku OR default
const PORT = process.env.PORT || 5000

/// 2. Specify Node Environment :
//  use a sepcific ver of node -> tell Heroku 
// file "package.json"
app.listen(PORT)

//git remote heroku 