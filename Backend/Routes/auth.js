const express = require("express")
const supabase = require("../Config/supabase")
const User = require("../Models/User")

const router = express.Router()

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body 
    // console.log(name, email, password)

    try{
        // console.log({email , password })
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
          });

        console.log(data, "data from supabase")
        if (error) throw error 

        const newUser = await User.create({name, email, supabaseId: data.user.id })
        console.log(newUser, "new USer")

        res.send({message: "User registered Successfully", user: data.user}) //or i can send DB data as well
    } catch(e) {
        res.status(500).send({error: e.message})
    }

})

router.post("/login", async(req, res) => {
    const {email, password} = req.body

    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });

        console.log(data, "data from supabase")
        if (error) throw error 

        res.send({message: "Login Successful", user: data.user, token: data.session.access_token })
    } catch(e) {
        res.status(400).send({error: e.message})
    }
})


module.exports = router