// Imports
const router = require('express').Router()

const { 
    getSignup,
    postSignup,
    getLogin,
    postLogin,
    postLogout
} = require('./../controllers/auth.controller')

// Routes
// Signup
router.get('/signup', getSignup)
router.post('/signup', postSignup)

// Login
router.get('/login', getLogin)
router.post('/login', postLogin)

// Logout
router.post('/logout', postLogout)

// Export
module.exports = router