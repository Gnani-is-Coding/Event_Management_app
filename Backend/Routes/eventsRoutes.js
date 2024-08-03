const express = require("express")
const Events = require("../Models/Events")
const authMiddleware = require("../AuthMiddleware")


const router = express.Router()

router.use(authMiddleware)

router.get("/", async(req, res) => {
    try {
        const eventsList = await Events.find({})
        console.log(eventsList, "events")

        return res.send(eventsList)
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send("Error:", e.message)
    }
})

router.post("/", async(req, res) => {
    const {title, date, location, description} = req.body

    try {
        const newEvent = await Events.create({title, date, location, description})
        console.log(newEvent, "new event")
        
        return res.send(newEvent)
    } catch(e) {
        res.status(500).send({Error: e.message})
    }
})

router.put("/:id", async(req, res) => {
    //update a particular event 
})

router.delete("/:id", async(req, res) => {
    //delete a event 
})

module.exports = router


