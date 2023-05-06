const {Noticia, validateBody} = require('../models/noticia')
const {Post} = require('../models/post')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {

    const result = await Noticia.find({})
    res.send(result).status(200)
})


router.get('/findNews', async (req, res) => {

    fetch('https://api.marketaux.com/v1/news/all?industries=Financial&filter_entities=true&limit=3&api_token=2HFd5z21f3Zbxh5NbKcFo5kyiuqfxkO0YKRyAvla', {
        method: 'GET',
        headers: {
            'Authorization': `Basic \${authorization}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const articles = data.data;
        const requests = articles.map(async (article) => {
        console.log(article)
        const noticia = new Noticia({
            title: article.title,
            img: article.img_url,
            content: article.description,
            id_noticia: article.uuid
        });
        const savedNoticia = await noticia.save();
        return savedNoticia;
        });

        const savedNews = Promise.all(requests)
        .then(savedNews => {
        Noticia.find({})
            .then(allNews => {
            res.send(allNews).status(200);
            })
            .catch(error => {
            console.error('Error:', error);
            res.sendStatus(500);
            });
        })
        .catch(error => {
        console.error('Error:', error);
        res.sendStatus(500);
        });
    })
    .catch(error => {
    console.error('Error:', error);
    res.sendStatus(500);
    });
});

router.get('/:id_noticia', async(req, res) => {

    const result = await Noticia.find({id_noticia: `${req.params.id_noticia}`})
 
    res.send(result).status(200)
})



router.put('/:id_noticia', async (req, res) => {
  
    console.log(req.body)
    const newPost = await Noticia.findOneAndUpdate({id_noticia: req.params.id_noticia}, {$push: {posts: req.body}})

    res.send(newPost).status(200)  
})

router.post('/nueva', validateBody, async (req, res) => {

    const noticia = new Noticia(req.body)
    const newNoticia = await noticia.save()

    res.send(newNoticia).status(200)
})



module.exports = router