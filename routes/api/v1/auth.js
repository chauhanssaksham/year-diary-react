const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const { check } = require('express-validator');
const authController = require('../../../controllers/api/v1/authController');


//@route        GET api/v1/auth
//@description  get a logged in user
//@access       Private
//TOKEN:        Set header 'x-auth-token'
router.get('/', auth, authController.getUser);

//@route        POST api/v1/auth
//@description  Auth user and get token
//@access       Public
router.post('/',[
    check('email', 'Please include a valid email ID').isEmail(),
    check('password', 'Password is required').exists()
], authController.getToken);

module.exports = router;