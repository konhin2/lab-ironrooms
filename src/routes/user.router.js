// Import
const router = require('express').Router()

const { getProfile } = require('./../controllers/user.controller')

// Routes
router.get('/:user', getProfile)

// Export
module.exports = router