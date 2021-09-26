const express = require("express")
const app = express()
const ms = require('ms')
const keepAlive = require('keep-alive')
const base_url = "https://gud-api.gofaizen.repl.co"

keepAlive(base_url, ms('5m')) // this is for keeping the API from dying
require("./routes")(app)

app.get("/", (req, res) => {
  res.send("Home page") // endpoint list soonTM
})

app.listen(5000, () => {
  console.log("API is up and running, I think")
})