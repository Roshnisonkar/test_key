import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Layout from '../../Component/Layout';
import Swal from 'sweetalert2'

const Register = () => {
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();

  const handlesubmit = ()=>{
    var stuDetails = {"Name":name,"Email":email,"Password":password,"Mobile":mobile}

    axios.post("http://localhost:3001/student/save",stuDetails).then((res)=>{
     console.log(res);
     Swal.fire("Registerd Successfully");
    }).catch((err)=>{
     console.log(err);
     Swal.fire("Registerd Failed");
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
          <h2 className="display-5 fw-bold text-center">Sign up</h2>
          <p className="text-center m-0">Already have an account? <Link to="/login"><a className="link-primary text-decoration-none">Sign in</a></Link></p>
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
                    <input type="password" className="form-control border-0 border-bottom rounded-0" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} defaultValue placeholder="Password" required />
                    <label htmlFor="password" className="form-label">Password</label>
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
                    <button onClick={handlesubmit} className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Sign up</button>
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

export default Register