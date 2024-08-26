import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Component/Layout';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'
const SeStudent = () => {

  const navigate = useNavigate();
const [adminDetails,setAdminDetails]=useState([]);

useEffect(()=>{
 axios.get("http://localhost:3001/admin/fetch").then((response)=>{
   setAdminDetails(response.data);
 }).catch((error)=>{
   console.log(error);
 })
});

const deletestudnt = (_id) =>{
  let deletedetails = {"data" : {"_id":_id} }
  axios.delete("http://localhost:3001/admin/delete").then((res)=>{
    console.log(res);
  // toast.success("deleted")
  Swal.fire("Deleted");
    navigate("/seeStu")
    
  }).catch((err)=>{
    console.log(err);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    
  })
}
  return (
   <>
   <Layout>
   <div className="container">
   <center><h2>Student details</h2>   
      <table className='table table-bordered '>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
          <th>MOBILE</th>
          <th>QUALIFICATION</th>
          <th>INFO</th>
        </tr>
        {
          adminDetails.map((key)=>(
            <tr>
              <td>{key._id}</td>
              <td>{key.Name}</td>
              <td>{key.Email}</td>
              <td>{key.Password}</td>
              <td>{key.Mobile}</td>
              <td>{key.Qualification}</td>
              <td>{key.info}</td>
              <button className='btn btn-danger' onClick={()=>deletestudnt(key._id,"delete")}>Delete</button>&nbsp;
            <Link to={`/update/${key._id}`} className='btn btn-success'> Edit</Link> 

            </tr>
          ))
        }
      </table>
    </center>
    </div>
    </Layout>
   </>
  )
}

export default SeStudent