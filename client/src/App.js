import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUsers from './components/EditUsers';
import Error from './components/Error';

import "./styling/navbar.scss"
import "./styling/home.scss"
import "./styling/allusers.scss"
import "./styling/addusers.scss"
import "./styling/editUsers.scss"
import "./styling/error.scss"



function App() {
  return (
    <Router>
    <NavBar/>
     < Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path='/allUsers' element={<AllUsers/>} />
        <Route exact path='/addUsers' element={<AddUser/>} />
        <Route exact path='/:id' element={<EditUsers/> } />
        <Route path='/CRUD-App' element={<Error/> } />
     </Routes>
    </Router>
  );
}

export default App;
