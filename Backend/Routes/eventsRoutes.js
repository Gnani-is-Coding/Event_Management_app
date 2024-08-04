const express = require("express")
const Events = require("../Models/Events")
const authMiddleware = require("../AuthMiddleware")
require("dotenv").config()


const router = express.Router()

router.use(authMiddleware)

router.get("/", async(req, res) => {
    try {
        const userID = req.user.id
        const eventsList = await Events.find({userId: userID})
        console.log(eventsList, "events")

        return res.send(eventsList)
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send("Error:", e.message)
    }
})

router.post("/", async(req, res) => {
    const {title, date, location, description} = req.body
    //const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`

    try {
        // const weatherInfo = await  fetch(url)
        // const weatherResponse = await weatherInfo.json()
        // console.log(weatherInfo, "info")
        console.log("req.user.id", req.user.id)
        const newEvent = await Events.create({title, date, location, description, userId: req.user.id})
        
        return res.send(newEvent)
    } catch(e) {
        res.status(500).send({Error: e.message})
    }
})

router.put("/:id", async(req, res) => {
    const {id} = req.params
    
    try {
        console.log(id, "id from put req")
        console.log(req.body)
        const event = await Events.updateOne({_id: req.params.id}, {$set: {...req.body}})
        console.log(event, "event from put")

        if(!event) return res.status(404).json({error: "Event not Found"})
            
        res.send(event)

    } catch(e) {
        res.status(500).send({error: e.message})
    }
})

router.delete("/:id", async(req, res) => {
     try {
        const event = await Events.deleteOne({_id: req.params.id})

        if(!event) return res.status(404).json({error: "Event not Found"})

        res.send({message: "Event deleted successfully"})
        
    } catch(e) {
        res.status(400).send({error: e.message})
    }
})

module.exports = router


