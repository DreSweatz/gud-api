const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/yuri",
  run: async(req, res) => {
    var image = await akaneko.nsfw.yuri()
    res.json({ 
      url: image,  
    })
  }
}