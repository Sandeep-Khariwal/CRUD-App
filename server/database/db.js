const mongoose = require("mongoose");

// DataBase is connecte to backend here
const connection = async() =>{
    
    // const URL = "mongodb://localhost:27017/crudOperation";
    // password = n40kSHbcE1F7MvAA
    const URL = "mongodb+srv://sandeep:n40kSHbcE1F7MvAA@cluster0.gfuzmle.mongodb.net/crudOperation?retryWrites=true&w=majority";

    try{
       await mongoose.connect(URL,{useUnifiedTopology:true ,useNewUrlParser:true});
       
       console.log(`databse connected successfully on ${URL} `)
    }catch(error){
        console.log("Error while connecting with database",error)
    }
}

module.exports = connection