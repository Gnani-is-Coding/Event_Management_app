const express = require("express")
const supabase = require("../Config/supabase")
const User = require("../Models/User")
const Session = require("../Models/Sessions.js")

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

        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('User not found in database');
        }

        //Session creation
        const session = await Session.create({
            userId: user._id,
            ipAddress: req.ip,
            logoutTime: null
        })

        res.send({message: "Login Successful", user: data.user, token: data.session.access_token, sessionId: session._id })

    } catch(e) {
        res.status(400).send({error: e.message})
    }
})

router.post("/logout", async(req, res) => {
    const {sessionId} = req.body
    try {
        const {error} = await supabase.auth.signOut()

        if (error) throw error

        //update Session record 
        
        const user = await Session.updateOne({_id: sessionId}, {$set: {"logoutTime": new Date() }})
        console.log(user, "logout")
        
        if (!user) return res.status(401).send({error: "User not Found"})

        res.send({ message: "Logged out successfully and updated session record !!" });

    }  catch(e) {
        res.status(400).send({error: e.message})
    }
})


module.exports = router