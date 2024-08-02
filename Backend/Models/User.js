const mongoose = require("mongoose")
require("dotenv").config()

    
const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String, unique: true, required: true },
    supabaseId: {type: String, unique: true, required: true } 
})


const User = new mongoose.model("User", userSchema)

module.exports = User