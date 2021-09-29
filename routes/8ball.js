const deeznuts = require("../assets/responses.json")
module.exports = {
  name: "fun/8ball",
  run: async(req, res) => {
    // let {ques} = req.query;
    // if (!ques) return res.json({ error: "Provide a question!" })
    rand_deeznuts = deeznuts[Math.floor(Math.random() * deeznuts.length)]
    res.json({ response: rand_deeznuts })
  }
}