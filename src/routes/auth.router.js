// Imports
const router = require('express').Router()

const { 
    getSignup,
    postSignup,
    getLogin,
    postLogin
} = require('./../controllers/auth.controller')

// Routes
// Signup
router.get('/signup', getSignup)
router.post('/signup', postSignup)

// Login
router.get('/login', getLogin)
router.post('/login', postLogin)

// Export
module.exports = router