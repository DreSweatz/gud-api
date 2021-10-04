const akaneko = require('akaneko');
module.exports = {
  name: "nsfw/lewdneko",
  run: async(req, res) => {
    const image = await akaneko.lewdNeko()
    res.json({ 
      url: image,  
    })
    }
}