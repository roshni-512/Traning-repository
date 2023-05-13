import React from 'react'
import { MdOutlineCall } from 'react-icons/md'

import { MdEmail } from 'react-icons/md'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function GetInTouchComponent() {
  return (
    <div  style={{ backgroundColor: "#F8EDFF", padding: '1px' }}>
    <div className="container">
       <div className="row d-flex justify-content-around">
       
               <div className='col-12 col-md-5 mt-5' >
             <p style={{fontFamily:'Fraunces',fontSize:'50px',fontWeight:'600' }}>Get in touch</p>
             <p>We appreciate each customer and we are proud that 60% of clients come back to work with us again.</p>
             <p style={{color:'#1E0E62'}}><MdOutlineCall/> +1 999 999 9999</p>
             <p style={{color:'#1E0E62'}}><MdEmail/> info@roini.com</p>
               </div>
               <div className='col-12 col-md-5'>
               <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Your Name" />
                    </Form.Group>
                          <Row className='mt-3'>
                          <Col>
                     <Form.Control placeholder="Your email" />
                        </Col>
                         <Col>
                   <Form.Control placeholder="Your Phone" />
                        </Col>
                        </Row>
                     <Row className='mt-3'>
                     <Col>
                    <Form.Control placeholder="Your Company"  />
                      </Col>
                      <Col>
                           <Form.Control placeholder="Your position/role" />
                      </Col>
                      
                            </Row>
                            <Col>
     
                        <Form.Control
                          as="textarea"
                            placeholder="Drop a line"
                            style={{ height: '100px' }} className='mt-3'/>
                            
                      </Col>
                      <Col>
                      <Button className='mt-3' style={{background: '#9747FF',width:'100%'}}>Send</Button>
                      </Col>
                        </Form>
               </div>
               </div>
       </div> 
   </div>
  )
}
