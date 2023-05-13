import React from 'react'
import { Button } from 'react-bootstrap'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdPlayArrow } from "react-icons/md";
export default function OpenaccountComponent() {
  return (
    <div style={{backgroundColor:'#F8EDFF'}}>
      <div className="container" >
        <div>
          
            <p className='text-center' style={{fontFamily:'Fraunces',fontSize:'50px',fontWeight:'600' }}>Open your pro <span style={{fontFamily:'Fraunces', fontStyle:'italic', fontSize:'40px',fontWeight:'100'}}> account</span> in five<span style={{fontFamily:'Fraunces', fontStyle:'italic', fontSize:'40px',fontWeight:'100'}}> minutes</span> , no more</p>
            <div className='d-flex justify-content-center mb-5'> 
            <Button className='mt-5 p-2 px-3 py-2 d-flex justify-content-center'  style={{borderRadius:'50px' , backgroundColor:'#9747FF'}}>  <MdPlayArrow size={'25px'}/>     See the demo</Button>
            <Button className='mt-5 mx-3' variant='dark' style={{borderRadius:'50px'}}>Start my registration<MdKeyboardDoubleArrowRight size={'20px'}/></Button> 
             </div>
             
             <div className='row  d-flex justify-content-between '>
                <div  style={{width:'30%'}}>
                <div className='text-center'>
                <img src={"./Images/Group 48095457.png"} style={{width:'20%'}} className='rounded' alt=''/></div>
                <p className='text-center 'style={{fontFamily:'Fraunces',fontSize:'30px',fontWeight:'600' }}>ROINI <span style={{fontFamily:'Fraunces', fontStyle:'italic', fontSize:'30px',fontWeight:'100'}}> registration</span></p>
                <p className='text-center mb-5'>Enter your information from your computer or mobile.</p>
                </div>
                
                <div  style={{width:'30%'}}>
                <div className='text-center '>
                <img src={"./Images/Group 48095458.png"} style={{width:'20%'}} className='  rounded' alt=''/></div>
                <p className='text-center 'style={{fontFamily:'Fraunces',fontSize:'30px',fontWeight:'600' }}>Identity <span style={{fontFamily:'Fraunces', fontStyle:'italic', fontSize:'30px',fontWeight:'100'}}>verification</span></p>
                <p className='text-center mb-5'>Confirm your registration with an identity document and nothing more.</p>
                </div>
              
                <div  style={{width:'30%'}}>
                <div className='text-center '>
                <img src={"./Images/Group 48095459.png"} style={{width:'20%'}} className=' rounded' alt=''/></div>
                <p className='text-center 'style={{fontFamily:'Fraunces',fontSize:'30px',fontWeight:'600' }}>Opening the <span style={{fontFamily:'Fraunces', fontStyle:'italic', fontSize:'30px',fontWeight:'100'}}>account</span></p>
                <p className='text-center mb-5'>Receive a validation email and get your RIB within 48 hours, your card will follow closely.</p>
                </div>

             </div>
             </div>
        </div>
      </div>
   
  )
}
