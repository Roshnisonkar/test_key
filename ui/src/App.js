import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Admin from './Pages/admin/Admin';
import Addstudent from './Pages/Addstuent/Addstudent';
import SeStudent from './Pages/Seestudents/SeStudent';
import Logout from './Pages/Logout';
import Update from './Pages/Update/Update';
import UserHome from './Pages/User/UserHome';
import Contact from './Pages/contact us/Contact';
import About from './Component/visitior/About';
import Edit_Profile from './Pages/admin/Edit_Profile';
import ChangePassword from './Pages/admin/ChangePassword';
import Add_Category from './Pages/Category/Add_Category';



function App() {
  return (
   <>
   {/* <Header/> */}
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/addStu' element={<Addstudent/>}></Route>
    <Route path='/seeStu' element={<SeStudent/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    <Route path='/update/:_id' element={<Update/>}></Route>
    <Route path='/user' element={<UserHome/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/edit' element = {<Edit_Profile/>}></Route>
    <Route path='/cpadmin' element = {<ChangePassword/>}></Route>
    <Route path='/addcategory' element={<Add_Category/>}></Route>
   </Routes>
   {/* <Footer/> */}
   </>
  );
}

export default App;
