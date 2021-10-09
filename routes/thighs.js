const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/thighs",
  run: async(req, res) => {
    var image = await akaneko.nsfw.thighs()
    res.json({ 
      url: image,  
    })
  }
}