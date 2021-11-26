// Import rooms.router.js
const router = require('express').Router()

const { getRooms } = require('./../controllers/rooms.controller')
const { isLoggedIn } = require('./../middlewares')
// Routes
router.get('/',isLoggedIn ,getRooms)

// Export
module.exports = router