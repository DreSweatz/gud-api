// ------ PACKAGE IMPORTS AND VARS ------ //
const express = require("express")
const app = express()
const monitor = require("express-status-monitor")
const aoi = require('aoi.js')
const bot = new aoi.Bot({
  token: process.env.token,
  prefix: "gud",
  autoUpdate: true,
  suppressAll: false
})

// ------ BOT COMMANDS AND CONFIGS ------ //

bot.onMessage({
  respondToBots: false,
  guildOnly: true
})
bot.loadCommands(`./commands/`)

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


