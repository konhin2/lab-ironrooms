// Imports
const mongoose = require('mongoose')

// Function
async function connectDB(){
    await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Connected to DataBase')
}

// Export
module.exports = connectDB