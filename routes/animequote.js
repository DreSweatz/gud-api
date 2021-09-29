const fetch = require('node-fetch')
module.exports = {
  name: "fun/animequote",
  run: async(req, res) => {
    const Resp = await fetch("https://animechan.vercel.app/api/random")
    let Resp_json = await Resp.json()
    res.json({ 
      anime: Resp_json.anime,
      character: Resp_json.character,
      quote: Resp_json.quote
    })
  }
}