const Users = require('../models/user');


const addProduct =async (id,product)=>{
   const user =await Users.findById(id);
        user.shoppingList = [...user.shoppingList,product];
        await user.save()
        return user;
        
}

module.exports = addProduct