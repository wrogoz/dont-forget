const express = require('express');
const Router = express.Router();
const Users = require('../models/user')
const bcrypt = require('bcryptjs')


//create user

Router.post('/api/registration', async(req, res) => {
    try {

        let user =await Users.findOne({email:req.body.email})
        if(user){
         
         return res.status(400).send('email is already exist')
        }
        
        user = new Users({
            name:req.body.name,
            surname:req.body.surname,
            email:req.body.email,
            password:req.body.password
        })

        user.password=await bcrypt.hash(user.password,10)

        await user.save();
        const token = user.generateAuthToken()

        res.set('access-token',token).send(user)

    } catch (error) {

        res.status(500).send(error.message)
    }
 
});

module.exports=Router