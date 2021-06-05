const mongoose = require("mongoose");
const validator= require("validator");
const registersSchema =  mongoose.Schema({
    name:{
        type:String,
        required : true,
        minLength:3
    },
    email:{
        type:String,
        required : true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email id")
            }
        }
    },
    password:{
        type:String,
        required : true,
         
    }
})
const Register = new mongoose.model("Register",registersSchema);
module.exports = Register;