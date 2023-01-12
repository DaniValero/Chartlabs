const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");
const validator = require("../middleware/joiValidator");

const noticiaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  id_noticia: {
    type: String,
    required: true,
    unique: true
  }
});


const Noticia = mongoose.model("Noticia", noticiaSchema);

const reqSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({ "any.required": `El campo "título" es requerido` }),
  content: Joi.string()
    .required()
    .messages({ "any.required": `El campo "contenido" es requerido` }),
  id_noticia: Joi.string()
  .required()

});

exports.Noticia = Noticia;
exports.validateBody = validator(reqSchema);