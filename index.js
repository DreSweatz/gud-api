const express = require("express")
const app = express()


require("./routes")(app)

app.get("/", (req, res) => {
  res.send({
  "discord_server": "Soon™ & join https://discord.gg/HbWpEAcmFk",
  
  "endpoints": {
    "fun_endpoints": [
      "GET /fun/8ball",
      "GET /fun/animequote",
      "GET /fun/dadjoke",
      "GET /fun/pickuplines",
      "GET /fun/joke/:type",
    ],
    "interaction_endpoints": [
      "GET /interactions/sfw/hug",
    ],
    "nsfw_endpoints": [
      "GET /nsfw/ass",
      "GET /nsfw/bdsm",
      "GET /nsfw/blowjob",
      "GET /nsfw/hentai",
      "GET /nsfw/lewdneko",
    ],
    "misc_endpoints": [
      "GET /misc/neko",
      "GET /misc/foxgirl",
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

