const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const Events = require("./Models/Events")


mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING).then(() => {
    console.log("Connected to DB in Atlas")
}).catch(e => console.error("Error",e.message))

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

const authRoutes = require("./Routes/auth")
const eventsRoutes = require("./Routes/eventsRoutes")

app.use('/auth', authRoutes)
app.use("/events", eventsRoutes)


app.listen(PORT, () => {
    console.log("Listening to Port", PORT)
})

app.get("/", async(req, res) => {
    return res.send( "Gnani" )
})