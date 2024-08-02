const express = require("express")


const router = express.Router()

router.get("/", async(req, res) => {
    //get events of a user 
})

router.post("/", async(req, res) => {
    //create an event
})

router.put("/:id", async(req, res) => {
    //update a particular event 
})

router.delete("/:id", async(req, res) => {
    //delete a event 
})

module.exports = router


