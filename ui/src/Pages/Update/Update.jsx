import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Component/Layout';
import { toast } from 'react-toastify';

const Update = () => {

    const {_id} = useParams();
    const [ name , setName ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ mobile , setMobile ] = useState();
    const [ qualification , setQualification ] = useState();

  const updatestudent =()=>{
    let adminDetails = {"condition_object":{"_id":_id},"content_obj":{"Name":name,"Email":email,"Password":password,"Mobile":mobile,"Qualification":qualification}}
    axios.patch("http://localhost:3001/admin/update",adminDetails).then((res)=>{
        console.log(res);
        toast.success("Successfully update")
    }).catch((err)=>{
        console.log(err);
        toast.warning("Failed")
        
    })
  }

  return (
 <>
 <Layout>
 <section className="bg-light py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
      <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Update Student Details</h2>
        <div className="card border border-light-subtle rounded-3 shadow-sm">
          <div className="card-body p-3 p-md-4 p-xl-5">
            
            <form action="#!">
              <div className="row gy-2 overflow-hidden">
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="First Name" required />
                    <label htmlFor="firstName" className="form-label"> Name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} defaultValue placeholder="Password" required />
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Mobile</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control"value={qualification} onChange={(e)=>setQualification(e.target.value)}  placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Qualification</label>
                  </div>
                </div>
                
                </div>
                <div className="col-12">
                  <div className="d-grid my-3">
                    <button  onClick={updatestudent}className="btn btn-success btn-lg" type="submit">Update</button>
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

export default Update