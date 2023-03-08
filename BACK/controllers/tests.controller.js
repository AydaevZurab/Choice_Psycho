const Test = require("../models/Test.model");

module.exports.testController = {
  getTest: async (req, res) => {
    try {
      const test = await Test.find();
      res.json(test);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addTest: async (req, res) => {
    try {
      const test = await Test.create({
        text: req.body.text,
      })
      res.json(test);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};