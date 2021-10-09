const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/tentacles",
  run: async(req, res) => {
    var image = await akaneko.nsfw.tentacles()
    res.json({ 
      url: image,  
    })
  }
}