import React, { useEffect } from 'react'
import Layout from '../../Component/Layout'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const Edit_Profile = () => {
    
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ mobile , setMobile ] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        
        axios.get("http://localhost:3001/student/fetch?email="+localStorage.getItem("Email")).then((res)=>{
            setName(res.data[1].Name);
            setEmail(res.data[1].Email);
            setMobile(res.data[1].Mobile)
            console.log(res.data);
            Swal.fire("Profile Updated");
        }).catch((err)=>{
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            
        })
    },[])
 
    const updateProfile =() =>{
        let adminDetails = { "condition_obj": { "Email": email }, "content_obj": { "Name": name, "Mobile": mobile} };;
        axios.patch("http://localhost:3001/student/update",adminDetails).then((res)=>{
            // navigate("/edit")
            console.log(res);
            
            Swal.fire("Successfully Updated");
        }).catch((err)=>{
            console.log(err);
            Swal.fire("Updation failed");
            
        })
    }

  return (
   <>
   <Layout>
{/* Registration 12 - Bootstrap Brain Component */}
<section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mb-5">
          <h2 className="display-5 fw-bold text-center">Edit Profile</h2>
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
                    <input type="text" className="form-control border-0 border-bottom rounded-0" name="firstName" value={name} onChange={(e)=>setName(e.target.value)} placeholder="First Name" required />
                    <label htmlFor="firstName" className="form-label"> Name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control border-0 border-bottom rounded-0" name="lastName" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Last Name" required />
                    <label htmlFor="lastName" className="form-label">Mobile Number</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button  onClick ={updateProfile}className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Edit Profile</button>
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

export default Edit_Profile