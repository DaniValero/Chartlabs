const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const _ = require("lodash");
const mongoose = require("mongoose");
const validator = require("../middleware/joiValidator");

const commentsSchema = new mongoose.Schema({
  user_id: String, 
  username: String,
  content: String,
  date: Date,
})

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  comments: [commentsSchema]
});

userSchema.methods.generateToken = function () {
  return jwt.sign(
    _.pick(this, ["_id", "username"]),
    config.get("jwtPrivateKey")
  );
};

const User = mongoose.model("User", userSchema);

const reqSchema = Joi.object({
  username: Joi.string()
    .required()
    .messages({ "any.required": `El campo "name" es requerido` }),
  email: Joi.string()
    .required()
    .email()
    .messages({ "any.required": `El campo "email" es requerido` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `El campo "password" es requerido` }),
});

exports.User = User;
exports.validateBody = validator(reqSchema);