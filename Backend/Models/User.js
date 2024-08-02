const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGOOSE_CONNECT_STRING).then(() => {
    console.log("User model connected to DB")
}).catch(e => console.error(e.message)) 
    
const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String, unique: true, required: true },
    password: {type: String, required: true}
})


const User = new mongoose.model("users", userSchema)

module.exports = User