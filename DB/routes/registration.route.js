const express = require('express');
const router = express.Router();
const { postParticipentsDetails, getParticipentsDetails } = require('../controler/Registration.controler.js');

router.post('/register', postParticipentsDetails);
router.get('/registrationinfo', getParticipentsDetails);

module.exports = router;
