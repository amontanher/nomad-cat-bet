const mongoose = require('mongoose');

const FishSchema = new mongoose.Schema({
    Name: String
})

module.exports = mongoose.model('Fish', FishSchema);