import React from 'react'
import Layout from '../../Component/Layout'
import { useState } from 'react';
import axios from 'axios';

const Add_Category = () => {
    const [ name , setName ] = useState();
    const [ file , setFile ] = useState();

    const catinput = (event)=>{
    setFile(event.target.files[0])
    }

const handlecategory = (event)=>{
  var formData = new FormData();//used to send bulk amount of data
  formData.append('catname',name);
  formData.append('caticon',file);
  const config = {
    'content-type':'multipart/form-data'
  };
  axios.post("http://localhost:3001/category/save",formData,config).then((res)=>{
    alert("added succesfully");
  });
}

  return (
 <>
 <Layout>
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
                    <input type="file" className="form-control border-0 border-bottom rounded-0" name="email" onChange={catinput} placeholder="name@example.com" required />
                    <label htmlFor="email" className="form-label">Add Category</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button onClick={handlecategory} className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Add Category</button>
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

export default Add_Category