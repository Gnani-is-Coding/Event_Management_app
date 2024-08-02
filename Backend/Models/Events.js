const mongoose = require("mongoose")

const eventsSchema = new mongoose.Schema({
    name:{type: String, required: true},
    description: String, 
    date:{type: Date, required: true},
    location: {type:String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true} 
})

const Events = mongoose.model("Events", eventsSchema)

module.export = Events