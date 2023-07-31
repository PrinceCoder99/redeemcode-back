const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/login', [
    body('userid').notEmpty()
], async (req, res) => {
    let success = true
    const result = validationResult(req);
    if (!result.isEmpty()) {
        success = false
        return res.status(400).json({ success, errors: result.array() });
    }
    let user = await User.create({
        userid: req.body.userid,
        password: req.body.password
    })
    res.status(200).json({success, user})
});

module.exports = router