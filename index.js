const express = require("express")
const app = express()


require("./routes")(app)

app.get("/", (req, res) => {
  res.send({
  "base_url": "https://gud-api.gofaizen.repl.co",
  "discord_server": "Soon™ & join https://discord.gg/HbWpEAcmFk",
  "twitter": "https://twitter.com/TheRealFaizen",
  "endpoints": {
    "fun_endpoints": [
      "GET /fun/dadjoke",
      "GET /fun/pickuplines",
    ],
    "interaction_endpoints": [
      "GET /interactions/hug"
    ],
    "nsfw_endpoints": [
      "Later, I am lazy"
    ]
  }
  }) // endpoint list soonTM
})

app.listen(5000, () => {
  console.log("API is up and running, I think")
})
app.set('json spaces', 1);