// Import
const bcryptjs = require('bcryptjs')
const User = require('./../models/User')

// Functions Signup
exports.getSignup = (req, res) => {
    res.render('auth/signup')
}

exports.postSignup = async(req, res) => {
    // Get Data
    const { 
        name, 
        email, 
        password 
    } = req.body
    // Validations
    if(!name, !email, !password){
        return res.render('auth/signup', {
            msg: 'All fields required.'
        })
    }
    // Regex
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(!regex.test(password)){
        return res.render('auth/signup', {
            msg: 'Please include 6 charts, 1 number, 1 uppercas, 1 lowercase'
        })
    }
    // Create user
    try {
        // Encript password

    } catch (error) {
        
    }
}
// Functions Login
exports.getLogin = (req, res) => {
    res.render('auth/login')
}