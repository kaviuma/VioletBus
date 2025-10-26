let mongoose = require("mongoose");

let signup = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
});

let signupModel = mongoose.model("signup",signup);
module.exports = signupModel;