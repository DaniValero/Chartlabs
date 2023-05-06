const config = require("config");
const mongoose = require('mongoose')

module.exports = function () {
    mongoose
    .connect(config.get("db"), {useUnifiedTopology: true}) 
    .then(() => console.log("Connected to the database..."))
    .catch((err) => console.log("ERROR FATAL: ", err))
}