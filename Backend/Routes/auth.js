const express = require("express")
const mongoose = require("mongoose")
const supabase = require("../Config/supabase")
const User = require("../Models/User")

const router = express.Router()

router.post("/register", async (req, res) => {
    console.log(req, "req")
})

router.post("/login", async(req, res) => {

})


module.exports = router