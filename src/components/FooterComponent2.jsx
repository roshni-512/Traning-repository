import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function FooterComponent2() {
  return (
    <div>
      
      <Navbar  expand="lg" className='bg-color'>
          
             <Navbar.Brand  className="heading" id='headingcolor' >roini</Navbar.Brand>
            
          
               <Nav className="me-auto my-2 my-lg-0 mx-auto" id='navspace' navbarScroll>
                 <Nav.Link href="#action1"className="navpadding" id='navlink'>Welcome</Nav.Link>
                 <Nav.Link href="#action2" className="navlink"id='navlink'>Terms of use</Nav.Link>
                <Nav.Link href="#action3" className="navlink"id='navlink'>Data Protection</Nav.Link>
                <Nav.Link href="#action4" className="navlink"id='navlink'>Configure Cookies</Nav.Link>
                <Nav.Link href="#action4" className="navlink"id='navlink'>Legal notice</Nav.Link>
               </Nav>
              <Form className="d-flex"  id='fspace'>
              <img src={"./Images/Linkedin.png"} style={{width:'20%'}} className='mt-4' alt=''/>
              <img src={"./Images/Facebook.png"} style={{width:'20%'}} className='mt-4' alt=''/>
              <img src={"./Images/Twitter.png"} style={{width:'20%'}} className='mt-4' alt=''/>
               </Form>
            
           
         </Navbar>
    </div>
  )
}
