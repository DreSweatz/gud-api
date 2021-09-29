const express = require("express")
const app = express()


require("./routes")(app)

app.get("/", (req, res) => {
  res.send({
  "discord_server": "Soon™ & join https://discord.gg/HbWpEAcmFk",
  
  "endpoints": {
    "fun_endpoints": [
      "GET /fun/dadjoke",
      "GET /fun/pickuplines",
      "GET /fun/8ball?ques=text"
    ],
    "interaction_endpoints": [
      "GET /interactions/sfw/hug"
    ],
    "nsfw_endpoints": [
      "GET /nsfw/ass",
    ]
  },
  "extra_stuff": {
    "github": "https://github.com/NotFaizen/gud-api" 
  }
  })
})

app.listen(5000, () => {
  console.log("API is up and running, I think")
})
app.set('json spaces', 1);