const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  text: String,
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;