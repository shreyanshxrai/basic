const mongoose = require("mongoose");
mongoose.connect("")

const userschema = new mongoose.Schema({
    name : {type:String , required: true },
    username : {type:String , required: true , unique : true},
    password : {type:String , required: true},
    dob : {type: Date  }


})

const User = mongoose.model('User', userschema);
module.exports={User};