import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Layout from '../../Component/Layout';
import { toast } from 'react-toastify';

const Login = () => {
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  var navigate = useNavigate();

const handlelogin = () =>{

  if(email == undefined || password == undefined){
          alert("please enter email and password")
  }
  else{

    var stuDetails = {"Email" : email, "Password" : password}
  axios.post("http://localhost:3001/student/login",stuDetails).then((res)=>{
    var student = res.data.stuDetails;
    localStorage.setItem("Email",student.Email);
    localStorage.setItem("Password",student.Password);
    localStorage.setItem("Mobile",student.Mobile);
    localStorage.setItem("Name",student.Name);
    localStorage.setItem("_id",student._id);
    localStorage.setItem("status",student.status);
    localStorage.setItem("role",student.role);
    localStorage.setItem("token",res.data.token);

    // student.role === "/admin"? Navigate("/admin") : Navigate("/user")
    student.role=="admin"? navigate("/admin") : navigate("/user");
      toast.success("Successfully login")
  }).catch((err)=>{

  })
  }
}

  return (
 <>
 <Layout>
   <section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mb-5">
          <h2 className="display-5 fw-bold text-center">Sign In</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 col-xl-8">
        <div className="row gy-5 justify-content-center">
          <div className="col-12 col-lg-5">
            <form action="#!">
              <div className="row gy-3 overflow-hidden">

              <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control border-0 border-bottom rounded-0" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} defaultValue placeholder="Password" required />
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button onClick={handlelogin} className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Sign In</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</Layout>

 </>
  )
}

export default Login