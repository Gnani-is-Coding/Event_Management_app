const mongoose = require("mongoose")

const eventsSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description: String, 
    date:{type: Date, required: true},
    location: {type:String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", requires: true} 
})

const Events = mongoose.model("Events", eventsSchema)

module.exports = Events