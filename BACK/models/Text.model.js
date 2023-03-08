const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
    text: String
})

const Text = mongoose.model("Text", textSchema);

module.exports = Text;