const mongoose = require("mongoose");


// User Schema
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  age:{
    type:Number
  },
  files:{
    type:String
  }

},{
  timestamps:true
})

// Create Model 
const User = mongoose.model("User",userSchema)

module.exports = User