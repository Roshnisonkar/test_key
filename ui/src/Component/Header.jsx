import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../Pages/Auth/Auth'

const Header = () => {

  const [headerPart,setHeaderPart]=useState();

  useEffect(()=>{
    if(localStorage.getItem("role") === "admin"){
      setHeaderPart(
        <>
        <div style={{borderBottom:"1px solid white"}}>
                  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand fs-2 text-white navv" href="#">Admin</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4" style={{textdecoration:'none'}}>
            <Link to="/admin"> <li className="nav-item ">
                <a className="nav-link active  text-white navv" aria-current="page" href="#">Home</a>
              </li></Link>
              
         <Link to='/addStu'>     <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Add Student</a>
              </li></Link>
            <Link to='/seeStu'>  <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Student Details</a>
              </li></Link>      
              <Link to='/addcategory'>  <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Add category</a>
              </li></Link>      
              
              <Link to='/edit'>     <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Edit Profile</a>
              </li></Link>
              <Link to='/cpadmin'>     <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Change Password</a>
              </li></Link>
              <Link to='/logout'>   <li className="nav-item">
                <a className="nav-link active text-white navv" aria-current="page" href="#">Logout</a>
              </li></Link>
            </ul>
          </div>
        </div>
      </nav>
      </div>

      
         </>

      )
    }
    else if(localStorage.getItem("role") === "user"){
      setHeaderPart(
        <>
        <div style={{borderBottom:"1px solid white"}} >
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container" >
    <a className="navbar-brand text-white fs-2" href="#" >User</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4" >
    <Link to='/'>    <li className="nav-item">
          <a className="nav-link active text-white navv" aria-current="page" href="#">Home</a>
        </li></Link>
        <Link to="/contact">  <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Contact</a>
              </li></Link>
              <Link to='/logout'>   <li className="nav-item">
                <a className="nav-link active  text-white " aria-current="page" href="#">Logout</a>
              </li></Link>
      </ul>
    </div>
  </div>
</nav>
</div>
      
         </> 
      )
    }
    else{
      setHeaderPart(
        <>
      <div style={{borderBottom:"1px solid white"}} >
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container" >
    <a className="navbar-brand text-white fs-2" href="#" >Student</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4" >
    <Link to='/'>    <li className="nav-item">
          <a className="nav-link active text-white navv" aria-current="page" href="#">Home</a>
        </li></Link>
        <Link to='/about'><li className="nav-item">
          <a className="nav-link text-white navv" href="#">About</a>
        </li></Link>
        <li className="nav-item">
                <a className="nav-link text-white navv" aria-current="page" href="#">Contact</a>
              </li>
        <Link to="/register"><li className="nav-item">
          <a className="nav-link text-white navv" href="#">Register</a>
        </li></Link> 
      </ul>
    </div>
  </div>
</nav>
</div>
      
         </>
      )
    }
  })

  // useEffect(()=>{
  //   if(localStorage.getItem("role")==="admin"){
  //     setHeaderPart( 
      //   <>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container">
      //     <a className="navbar-brand fs-2" href="#">Admin</a>
      //     <div className="collapse navbar-collapse">
      //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4" style={{textdecoration:'none'}}>
      //       <Link to="/admin"> <li className="nav-item ">
      //           <a className="nav-link active text-decoration-none" aria-current="page" href="#">Home</a>
      //         </li></Link>
              
      //    <Link to='/addStu'>     <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Add Student</a>
      //         </li></Link>
      //       <Link to='/seeStu'>  <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Student Details</a>
      //         </li></Link>
      //         <Link to='/logout'>   <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Logout</a>
      //         </li></Link>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      
      //    </>
  //     )
  //   } 
  // else if(localStorage.getItem("role")==="user"){
  //     setHeaderPart( 
      //   <>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container">
      //     <a className="navbar-brand fs-2" href="#">Admin</a>
      //     <div className="collapse navbar-collapse">
      //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4" style={{textdecoration:'none'}}>
      //       <Link to="/admin"> <li className="nav-item ">
      //           <a className="nav-link active text-decoration-none" aria-current="page" href="#">Home</a>
      //         </li></Link>
              
      //    <Link to='/addStu'>     <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Add Student</a>
      //         </li></Link>
      //       <Link to='/seeStu'>  <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Student Details</a>
      //         </li></Link>
      //         <Link to='/logout'>   <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Logout</a>
      //         </li></Link>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      
      //    </>
  //     )
  //   } 
   
  //   else{
  //     setHeaderPart(
      //   <>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container">
      //     <a className="navbar-brand fs-2" href="#">Student</a>
      //     <div className="collapse navbar-collapse">
      //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4 ">
      //       <Link to="/"> <li className="nav-item ">
      //           <a className="nav-link active text-decoration-none" aria-current="page" href="#">Home</a>
      //         </li></Link>
      //         <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">About</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link active" aria-current="page" href="#">Contact</a>
      //         </li>
      //         <Link to="/register"><li className="nav-item">
      //                <a className="nav-link active" aria-current="page" href="#">Register</a>
      //         </li></Link>
             
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      
      //    </>
  //     )
  //   }
  // })


  return (
    <>
    {headerPart}
    <Auth/>
     
    </>
   )
 }

export default Header