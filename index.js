// ------ PACKAGE IMPORTS ------ //
const express = require("express")
const app = express()
const monitor = require("express-status-monitor")

// ------ ROUTES HANDLER ------ //
require("./routes")(app)

// ------ HOME PAGE ------ //
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home.json')
})

app.get('/*', (req, res) => {
  res.send({ error: "Invalid endpoint" })
})

// ------ API CONFIGS AND SHIT ------ //
app.listen(5000, () => {
  console.log("API is up and running, I think")
})

app.set('json spaces', 1); // clean look
app.use(monitor()) // logs an stuff


