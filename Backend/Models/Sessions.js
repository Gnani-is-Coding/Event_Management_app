const mongoose = require("mongoose")

const sessionsSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
    loginTime: {type:Date, default: () => Date.now(), immutable: true },
    logoutTime: Date,
    ipAddress: String,
})

const Sessions = mongoose.model("Sessions", sessionsSchema)


module.exports = Sessions