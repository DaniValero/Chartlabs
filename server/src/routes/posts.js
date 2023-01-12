const {Post, validateBody} = require('../models/post')
const express = require('express')
const router = express.Router()

router.post('/create', validateBody, async (req, res) => {
  
    const post = new Post(req.body);
  
    const newPost = await post.save();
  
    res.send(newPost).status(200)
})


module.exports = router