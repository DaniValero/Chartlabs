const {Noticia, validateBody} = require('../models/noticia')
const {Post} = require('../models/post')
const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {

    const result = await Noticia.find({})
    res.send(result).status(200)
})

router.get('/:id_noticia', async(req, res) => {

    const result = await Noticia.find({id_noticia: `${req.params.id_noticia}`})
 
    res.send(result).status(200)
})


router.put('/:id_noticia', async (req, res) => {
  

    const newPost = await Noticia.findOneAndUpdate({id_noticia: req.params.id_noticia}, {$push: {posts: req.body}})

    res.send(newPost).status(200)  
})

router.post('/nueva', validateBody, async (req, res) => {

    const noticia = new Noticia(req.body)
    const newNoticia = await noticia.save()

    res.send(newNoticia).status(200)
})



module.exports = router