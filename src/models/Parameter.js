const mongoose = require('mongoose');

const ParameterSchema = new mongoose.Schema({
    Name: String,
    Value: String
})

module.exports = mongoose.model('Parameter', ParameterSchema);