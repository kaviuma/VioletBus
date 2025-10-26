let express = require("express");
const { signup, signin } = require("../controller/auth.controller");


let Auth = express.Router()

Auth.post("/signup",signup);
Auth.post("/signin",signin)

module.exports = Auth;