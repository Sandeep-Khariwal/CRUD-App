import { useState , useEffect } from 'react';
import {motion} from "framer-motion";
import {editUser, getUserById} from "../service/api";
import {useNavigate , useParams} from "react-router-dom";

const defaultValue = {
  name:"",
  email:"",
  username:"",
  phone:""
}

const EditUsers = () => {

  const [user,setUser] = useState(defaultValue)

  const {id} = useParams();

  // initialsize the useNavugate
  const navigate = useNavigate();

  useEffect(()=>{
    loadUserDetails()
  }, [" "]);

  const loadUserDetails = async() =>{
    const resp = await getUserById(id);
    setUser(resp.data[0])
  }

  // input from user handled here
  const onChangeHandler =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  // user details submitted here
  const editUserDetails = async(e)=>{
    e.preventDefault();
    await editUser(id,user);

    // change the component from addUser to allUSer after submit details
    navigate("/allUsers");
  }

  return (
    <section className='contact'>

    <motion.form
    initial={{x:"-100vw" , opacity:0}}
    animate={{x:0 , opacity:1}}
    transition={{delay:0.3}}>

    <h2>Edit Users</h2>
      <input  name='name' onChange={onChangeHandler} value={user.name } />
      <input  name='email' onChange={onChangeHandler} value={user.email} />
      <input  name='username'  onChange={onChangeHandler} value={user.username} />
      <input  name='phone' onChange={onChangeHandler} value={user.phone} />
    <button type='submit' onClick={editUserDetails}>EditUser</button>

    </motion.form>
</section>
  )
}

export default EditUsers