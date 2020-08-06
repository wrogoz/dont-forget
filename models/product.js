const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTypes = [
    'warzywa',
    'owoce',
    'mięso',
    'nabiał',
    'pieczywo',
    'napoje',
    'chemia'
    
]

const productSchema = new Schema({
    name:{
        type:String,
        require:true,
        trim:true,
        maxlength:255,
        minlength:1,
        lowercase:true,
        numberToBuy:Number
    },
    productType:{
        type:productTypes,
        require:true,
        trim:true
        

    }
})

const Products = mongoose.model('Products',productSchema);
module.exports=Products;