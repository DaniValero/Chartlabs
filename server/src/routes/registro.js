const {User, validateBody} = require('../models/users')
const express = require('express')
const bcrypt = require("bcrypt");

const router = express.Router()

router.post('/registro', validateBody, async (req, res) => {

    console.log(req.body)
    
    const user = new User (req.body)

    const newUser = await user.save()

    res.send("Se ha creado el usuario" + newUser).status(200)
})


module.exports = router