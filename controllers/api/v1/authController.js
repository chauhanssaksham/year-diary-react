const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../../../models/Users');
const {validationResult} = require('express-validator');

module.exports.getUser =  async (req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err){
        // console.error(err.message);
        res.status(500).json({
            error: {msg: "Internal Server Error"}
        }); 
    }
}

module.exports.getToken = async (req,res)=>{
    const errors = validationResult(req);
    //If there are errors, send a 400 Status and an array of the errors to be displayed as warnings:
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });  
    } 
    
    const {email, password} = req.body;
    
    try{
        let user = await  User.findOne({email});
        if(!user){
            return res.status(400).json({
                error: {msg: "Invalid credentials"}
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                error: {msg: "Invalid credentials"}
            });
        } 
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
        console.error(err);
        return res.status(500).json({error:{msg:"Server Error!"}});
    }

}