const express = require("express")
const User = require("../Models/User")
const authMiddleware = require("../AuthMiddleware")

const router = express.Router()

router.use(authMiddleware)

router.put("/", async (req, res) => {
    try {
        // console.log(req.user.email, req.body)
        // console.log(req.ip, "req ip address")
        const user = await User.updateOne({email: req.user.email}, {$set: {...req.body}})

        if(!user) return res.status(404).json({error: "User not Found"})

        res.send(user)

    } catch(e) {
        console.log("Error:", e.message)
        res.status(400).send({error: e.message})
    }
})

module.exports = router