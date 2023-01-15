const { User } = require("../models/user");
const Joi = require("joi");
const config = require("config");
const bcrypt = require("bcrypt");
const validator = require("../middleware/joiValidator");
const express = require("express");
const router = express.Router();

const reqSchema = Joi.object({
  email: Joi.string()
    .required()
    .email()
    .messages({ "any.required": `El campo "email" es requerido` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `El campo "password" es requerido` }),
});

router.post("/", validator(reqSchema), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  console.log(req.body)
  if (!user) return res.status(400).send("Email y password inválidos");

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(400).send("Email y password inválidos");

  const token = user.generateToken();
  res.header("x-auth-token", token).send("Usuario autentificado");
});

module.exports = router;