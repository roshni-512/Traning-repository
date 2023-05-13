import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Navbarcomponent() {
  return (
    <>
        <Navbar  expand="lg" className='bg-color'>
           <Container fluid>
             <Navbar.Brand  className="heading" id='headingcolor' >roini</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto my-2 my-lg-0 mx-auto" id='navspace' navbarScroll>
                 <Nav.Link href="#action1"className="navpadding" id='navlink'>Our Offer</Nav.Link>
                 <Nav.Link href="#action2" className="navlink"id='navlink'>Resource</Nav.Link>
                <Nav.Link href="#action3" className="navlink"id='navlink'>Blog</Nav.Link>
                <Nav.Link href="#action4" className="navlink"id='navlink'>Rate</Nav.Link>
               </Nav>
              <Form className="d-flex"  id='fspace'>
               <Nav.Link href="#action2" className='navlink' id='navlink1'>Log in</Nav.Link>
               <Button variant='dark' style={{borderRadius:'50px'}}>Open my account <MdKeyboardDoubleArrowRight size={'20px'}/></Button>
               </Form>
             </Navbar.Collapse>
            </Container>
         </Navbar>
        </>
  )
}



