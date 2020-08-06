const Users = require('../models/user');


const removeProduct =async (id,product)=>{
   const user =await Users.findById(id);
   user.shoppingList = user.shoppingList.filter((el)=>{
      return el.name!==product.name
   })
   await user.save()
        return user
}

module.exports = removeProduct