import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {

localStorage.removeItem("Email");
localStorage.removeItem("Name");
localStorage.removeItem("Password");
localStorage.removeItem("Mobile");
localStorage.removeItem("role");
localStorage.removeItem("_id");
localStorage.removeItem("status");
localStorage.removeItem("token");


  return (
  <>
  <Navigate to='/login'/>
  </>
  )
}

export default Logout