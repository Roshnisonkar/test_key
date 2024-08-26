import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
   <>
   <Header/>
   <main style={{minHeight:"80vh",backgroundImage: 'linear-gradient(to bottom right,yellow, red)'}}>
   {children}
   </main>
   <ToastContainer />
   <Footer />
   </>
  )
}

export default Layout;