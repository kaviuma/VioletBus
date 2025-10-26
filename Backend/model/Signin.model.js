let mongoose = require("mongoose");


let signin = new mongoose.Schema({
   
    email : {
        type: String
    },
    password : {
        type: String
    }
});

let signinpModel = mongoose.model("signin",signin);

module.exports = signinpModel;

