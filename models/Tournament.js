const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: String,
    date: Date,
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    bracket: Object
});

module.exports = mongoose.model('Tournament', tournamentSchema);