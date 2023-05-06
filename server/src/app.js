const express = require('express')
require('dotenv').config()

const app = express()

require('./startup/routes')(app)
require('./startup/db')()


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Chartlabs server ON port: ${port}`))