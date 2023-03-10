// import modules

import express from 'express'

import { champions } from './data/champions-data.js'
// Create Express app

const app = express()


// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)




// Mount routes

app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/champions', function(req, res) {
  res.render('champions/index', {
    champions: champions
  })
})
// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})