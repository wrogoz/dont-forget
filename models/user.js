const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const validator = require('validator')

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlength:2,
        maxlength:100
    },
    surname:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlength:2,
        maxlength:100
    },
    email:{
        type:String,
            required:true,
            trim:true,
            lowercase:true,
            minlength:4,
            maxlength:52,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('email is invalid')
                }
            }
    },
    password:{

            type:String,
            required:true,
            trim:true,
            minlength:4
            
    },
    shoppingList:{
        type:[{}],
        default:[]
    }
})

userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({id:this._id,email:this.email},'test')
    return token
}

const Users = mongoose.model("Users",userSchema);

module.exports=Users;

        
