import React, { useState } from 'react'
import Layout from '../../Component/Layout'
import axios from 'axios';

const ChangePassword = () => {
    const [oPassword, setOpassword] = useState();
    const [nPassword , setNewPassword ] = useState();
    const [cnPassword , setCNPassword ] = useState();

    const handlesubmit = ()=>{
      axios.get("http://localhost:3001/student/fetch?email="+localStorage.getItem("email")+"&Password="+oPassword).then((res)=>{
        console.log(res.data);
        
      }).catch((error)=>{
console.log(error);
      })
    }
  return ( 
   <>
   <Layout>
   <section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mb-5">
          <h2 className="display-6 fw-bold text-center">Change Password</h2>
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
                    <input type="email" className="form-control border-0 border-bottom rounded-0"  value={oPassword} onChange={(e)=>setOpassword(e.target.value)} placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label"> Old Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control border-0 border-bottom rounded-0" name="lastName" value={nPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="Last Name" required />
                    <label htmlFor="lastName" className="form-label">New Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control border-0 border-bottom rounded-0" name="lastName" value={cnPassword} onChange={(e)=>setCNPassword(e.target.value)} placeholder="Last Name" required />
                    <label htmlFor="lastName" className="form-label"> Confirm New Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button onClick={handlesubmit} className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Change Password</button>
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

export default ChangePassword