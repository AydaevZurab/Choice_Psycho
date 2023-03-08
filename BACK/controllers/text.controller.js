const Text = require('../models/Text.model');

module.exports.textController = {
    getText: async (req, res) => {
        const data = await Text.find();
        res.json(data);
    },
    
    addText: async (req, res) => {
        const data = await Text.create({
            text: req.body.text
        })
        res.json(data)
    }
};