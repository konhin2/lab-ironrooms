// Imports
const router = require('express').Router()

const { 
    getSignup,
    postSignup,
    getLogin,
} = require('./../controllers/auth.controller')

// Routes
// Signup
router.get('/signup', getSignup)
router.post('/signup', postSignup)

// Login
router.get('/login', getLogin)

// Export
module.exports = router