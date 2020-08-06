const express = require('express')
const Users = require('../models/user')
const Router = express.Router()
const bcrypt = require('bcryptjs')

Router.post('/api/auth', async(req, res) => {
    try {
        const user =await Users.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send('no user found')
        }
        const isPasswordValid = await bcrypt.compare(req.body.password,user.password)
      
        
      if(!isPasswordValid){
            return res.status(400).send('invalid password')
        }
        
        const token = user.generateAuthToken();
        res.send(token)

    } catch (error) {
        res.status(500).send(error.message)
    }
});


module.exports = Router