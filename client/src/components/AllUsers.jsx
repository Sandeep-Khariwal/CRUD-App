import React,{  useEffect,useState }  from 'react';
import {getUsers , deleteUser} from "../service/api";
import{MdEdit,MdDelete} from "react-icons/md";
import { Link , useNavigate } from 'react-router-dom';

const AllUsers = () => {

  const [user , setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    getAllUsers();
  },[])

  const getAllUsers = async() =>{
    let resp = await getUsers()
    setUser(resp.data);
  }

  const deleteUSerDetails = async(id) =>{
      await deleteUser(id);
      navigate("/allUsers")
  }

  return (
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>E-mail</th>
        <th>User_Name</th>
        <th>Phone</th>
        <th>Operation</th>
      </tr>
      </thead>
      <tbody>

        {
        user.map((user) =>(
              <tr key={user._id} >
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td className='buttons' >
                <Link to ={`/${user._id}`}>
                  <button className='edit'><MdEdit/></button>
                </Link>
                <Link to ={`/${user._id}`}  >
                  <button className='delete' onClick={()=>deleteUSerDetails(user._id)} ><MdDelete/></button>
                </Link>
              </td>
          </tr>
      ))
        }

      </tbody>
    </table>
  )
}

export default AllUsers
