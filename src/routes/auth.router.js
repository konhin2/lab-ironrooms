// Imports
const router = require('express').Router()

const { 
    getSignup,
    getLogin
} = require('./../controllers/auth.controller')

// Routes
// Signup
router.get('/signup', getSignup)

// Login
router.get('/login', getLogin)

// Export
module.exports = router