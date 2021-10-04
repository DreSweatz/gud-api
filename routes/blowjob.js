const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/blowjob",
  run: async(req, res) => {
    var image = await akaneko.nsfw.blowjob()
    res.json({ 
      url: image,  
    })
  }
}