const gofaizen = require(`../assets/faizenimages.json`)
module.exports = {
  name: "misc/faizen",
  run: async(req, res) => {
    const rand_faizen = gofaizen[Math.floor(Math.random() * gofaizen.length)]
    res.json({ url: rand_faizen })
  }
}