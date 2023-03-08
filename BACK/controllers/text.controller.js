const Text = require('../models/Text.model');

module.exports.textController = {
    getText: async (req, res) => {
        try {
            const text = Text.find();

            return res.json(text)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    addText: async (req, res) => {
        try {
            const text = await Text.create({
                text: req.body.text
            })
            return res.json(text)
        } catch (error) {
            res.json({ error: error.message })
        }
    }
};