const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login route
router.post('/login', async (req, res) => {
    // Your login logic
});

// Signup route
router.post('/signup', async (req, res) => {
    // Your signup logic
});

module.exports = router;