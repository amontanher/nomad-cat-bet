const mongoose = require('mongoose');

const BetSchema = new mongoose.Schema({
    CatName: String,
    Fish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fish'
    },
    Ration: Number
})

module.exports = mongoose.model('Bet', BetSchema);