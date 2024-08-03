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
const userRoutes  = require("./Routes/userRoutes")
const sessionsRoutes = require("./Routes/sessionRoutes")

app.use('/auth', authRoutes)
app.use("/events", eventsRoutes)
app.use("/user", userRoutes)
app.use("/sessions", sessionsRoutes)

app.get("/", async(req, res) => {
    return res.send({
        message: "Welcome to the Event Management API",
        endpoints: {
            auth: {
                register: {
                    method: "POST",
                    path: "/auth/register",
                    description: "Register a new user",
                    body: {
                        name: "string",
                        email: "string",
                        password: "string"
                    }
                },
                login: {
                    method: "POST",
                    path: "/auth/login",
                    description: "Authenticate a user and receive a JWT token",
                    body: {
                        email: "string",
                        password: "string"
                    }
                },
                logout: {
                    method: "POST",
                    path: "/auth/logout",
                    description: "Log out the current user",
                    authentication: "Required",
                    body: {
                        sessionId: "string"
                    }
                }
            },
            events: {
                getAll: {
                    method: "GET",
                    path: "/events",
                    description: "Retrieve all events",
                    authentication: "Required"
                },
                create: {
                    method: "POST",
                    path: "/events",
                    description: "Create a new event",
                    authentication: "Required",
                    body: {
                        title: "string",
                        date: "string",
                        location: "string",
                        description: "string"
                    }
                },
                update: {
                    method: "PUT",
                    path: "/events/:eventId",
                    description: "Update an existing event",
                    authentication: "Required",
                    body: {
                        title: "string (optional)",
                        date: "string (optional)",
                        location: "string (optional)",
                        description: "string (optional)"
                    }
                }
            },
            user: {
                update: {
                    method: "PUT",
                    path: "/user",
                    description: "Update user information",
                    authentication: "Required",
                    body: {
                        name: "string (optional)",
                        email: "string (optional)"
                    }
                }
            },
            sessions: {
                getAll: {
                    method: "GET",
                    path: "/sessions",
                    description: "Retrieve all sessions for the authenticated user",
                    authentication: "Required"
                }
            }
        }
    })
})

app.listen(PORT, () => {
    console.log("Listening to Port", PORT)
})