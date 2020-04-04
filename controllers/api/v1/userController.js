const User = require('../../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { validationResult } = require('express-validator');

module.exports.addUser =  async (req,res)=>{
    //Validate using express-validator
    const errors = validationResult(req);
    //If there are errors, send a 400 Status and an array of the errors to be displayed as warnings:
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });  
    }  

    const {name, email, password} = req.body;

    try{
        let user = await User.findOne({email: email});
        if (user){
            return res.status(400).json({msg:'User already exists'}); 
        }
        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);                  //Generate salt using bcrypt
        user.password = await bcrypt.hash(password, salt);      //And encrypt the password

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;

            return res.json({token});
        });

    } catch (err){
        console.error(err.message);
        return res.status(500).send("Server Error!");
    }
 
}