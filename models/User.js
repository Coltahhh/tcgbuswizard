const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    tournaments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }],
    bio: { type: String, default: '' },
    avatar: { type: String, default: 'https://i.ibb.co/4YfL60K/default-avatar.png' },
    joinedTournaments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }],
    social: {
        discord: String
    }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);