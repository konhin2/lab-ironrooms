// app.js
// Imports
const express = require('express')
const app = express()

require('dotenv/config')

const path = require('path')

const connectDB = require('./db')

// Middlewares
// Static files - HTML CSS JS IMAGES
app.use(express.static(path.join(__dirname, 'public')))

// View
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// To use req.body
app.use(express.urlencoded({ extended: true }))

connectDB()
// Routes
// Home
app.use('/', require('./routes'))

// Login y signup
app.use('/auth', require('./routes/auth.router'))

// Export
module.exports = app