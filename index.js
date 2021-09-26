const express = require("express")
const app = express()
const ms = require('ms')
const keepAlive = require('keep-alive')
const base_url = "https://gud-api.gofaizen.repl.co"

keepAlive(base_url, ms('5m'))
require("./routes")(app)

app.get("/", (req, res) => {
  res.send("Home page")
})

app.listen(5000, () => {
  console.log("API is up and running, I think")
})