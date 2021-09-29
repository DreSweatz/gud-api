const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/ass",
  run: async(req, res) => {
    image = await akaneko.nsfw.ass()
    res.json({ 
      url: image,  
    })
  }
}