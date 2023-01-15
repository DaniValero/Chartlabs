const config = require("config");
const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");
const validator = require("../middleware/joiValidator");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  id_post: {
    type: String,
    required: false,
    unique: true,
  },
  id_noticia: {
    type: String,
    required: true,
  },

});


const Post = mongoose.model("Post", postSchema);

const reqSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({ "any.required": `El campo "título" es requerido` }),
  content: Joi.string()
    .required()
    .messages({ "any.required": `El campo "contenido" es requerido` }),
  id_post: Joi.string()
    .required(),
  id_noticia: Joi.string()
    .required()

});

exports.Post = Post;
exports.validateBody = validator(reqSchema);