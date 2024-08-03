const mongoose = require("mongoose");

const sessionsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "User"
    },
    loginTime: {
        type: Date, 
        default: () => Date.now(), 
        immutable: true 
    },
    logoutTime: {
        type: Date, 
        default: null
    },
    ipAddress: String,
});

const Sessions = mongoose.model("Sessions", sessionsSchema);

module.exports = Sessions;