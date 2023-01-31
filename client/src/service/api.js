import axios from "axios";
const URL = "http://localhost:8000";


// call api for add data in database
export const addUser = async(data) =>{
    try{
    return await axios.post(`${URL}/addUsers`,data)
      }catch(error){
    console.log("Error Occure While Calling API",error);
    }
}

// call api for fetch data from databse
export const getUsers = async() =>{
    try{
      return await axios.get(`${URL}/allUsers`)
    }catch(error){
      console.log("Error while fatching data from database",error);
    }
}

// call API for Edit USer
export const getUserById = async(id) =>{
  id = id || "";
    try{
      return await axios.get(`${URL}/${id}`) 
    }catch(error){
      console.log(`Error while calling getUser API ${URL}/${id} `,error)
    }
}

// call API for Edit USer detail and save in DB
export const editUser = async(id,user) =>{
  id = id || " "
  try{
    return await axios.put(`${URL}/${id}`,user)
  }catch(error){
    console.log("Error while saving edited details in DB",error)
  }
}

// call API for delete User
export const deleteUser = async(id)=>{
   try{
    return await axios.delete(`${URL}/${id}`)
   }catch(error){
    console.log(`Error while Deleting data ${URL}/${id}`,error)
   }
}