const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/succubus",
  run: async(req, res) => {
    var image = await akaneko.nsfw.succubus()
    res.json({ 
      url: image,  
    })
  }
}