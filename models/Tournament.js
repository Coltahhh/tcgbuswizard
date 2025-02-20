const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: String,
    date: Date,
    participants: [String],
    bracket: Object,
    results: Object
});

module.exports = mongoose.model('Tournament', tournamentSchema);