const express = require('express');
const router = express.Router();
const { getSignin, login } = require('../controler/Signin.controler.js');

router.post('/signin', getSignin);
router.post('/login', login);

module.exports = router;
