const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/v1/userController');
const { check } = require('express-validator');

//@route                POST api/v1/users
//@description          Register a user
//@access               Public
//@Required Fields:     name, email, password
router.post('/', [
    //Name is require and should not be empty
    check('name', 'Please add Name').not().isEmpty(),
    // Email must be an email
    check('email', 'Please include a valid Email').isEmail(),
    // password must be at least 5 chars long
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], userController.addUser );

module.exports = router;