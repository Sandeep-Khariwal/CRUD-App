// file is create for all call back functions
const User = require("../schema/userSchema.js")

const addUsers = async(req,resp) =>{
    
    const user = req.body;
    const newUser = new User(user)

    try{
       await newUser.save();
       resp.status(201).json(newUser);
    }catch(error){
        console.log(error);
        resp.status(409).json({message:error.message})
    }
}
module.exports = addUsers

// code for get data from database
const getUsers = async(_,resp)=>{
    try{
       const users = await User.find();
       resp.status(200).json(users); 
    }catch(error){
        resp.status(404).json({message:error.message})
    }
}
module.exports = getUsers

// code for get data from database on basis of id
const getUserById = async(req,resp)=>{
    try{
    const user = await User.find({_id: req.params.id});
    // second way const user = await User.findById(req.params.id) 
       resp.status(200).json(user); 
    }catch(error){
        resp.status(404).json({message:error.message})
    }
}
module.exports = getUserById


// code for update data in DB
const editUser = async(req,resp)=>{

    let user = req.body;
    const edituser = new User(user);

    try{
       await User.updateOne({_id: req.params.id},edituser)
        resp.status(201).json(edituser)
    }catch(error){
        resp.status(409).json({message:error.message})
    }
}
module.exports = editUser

// cod efor delete data from DB
const deleteUser = async(req,resp)=>{
    
    try{
       await User.deleteOne({_id:req.params.id});
       resp.status(201).json("Entry deleted successfully");
    }catch(error){
        resp.status(409).json({message:error.message})
    }
}
module.exports = deleteUser

module.exports = {
    addUsers:addUsers,
    getUsers:getUsers,
    getUserById:getUserById,
    editUser:editUser,
    deleteUser:deleteUser
}