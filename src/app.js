// app.js
// Imports
const express = require('express')
const app = express()

require('dotenv/config')

const path = require('path')

// Middlewares
// Static files - HTML CSS JS IMAGES
app.use(express.static(path.join(__dirname, 'public')))

// View
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// To use req.body
app.use(express.urlencoded({ extended: true }))

// Routes
// Home
app.use('/', require('./routes'))

// Export
module.exports = app