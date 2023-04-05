const express = require('express');
const cors = require('cors');



const login = require('../routes/auths')
const registro = require('../routes/registro')
const noticias = require('../routes/noticias')


const app = express()


module.exports = function (app) {

    app.use(cors())
    app.use(express.json())


    app.use('/login', login)

    app.use('/registro', registro)
    
    app.use('/noticias', noticias)
    

//PING

    app.get('/ping', (req, res) => {
        res.send('¡PONG!')
    })

}