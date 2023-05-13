import React from 'react'
import { Button } from 'react-bootstrap'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
export default function GridComponent() {
  return (
    <div  style={{ backgroundColor: "#F8EDFF", padding: '1px' }}>
     <div className="container">
        <div className="row d-flex justify-content-around">
        <div className='col-12 col-md-5'>
                    <img src={"./Images/Group 48095433.png"} style={{width:'100%', float:'left'}} className=' w-sm-100 mt-5' alt=''/>
                </div>
                <div className='col-12 col-md-5 mt-5' >
              <p style={{fontFamily:'Fraunces',fontSize:'50px',fontWeight:'600' }}>The cards in hand to</p><p style={{fontFamily:'Fraunces', fontStyle:'italic', fontSize:'40px'}}> go further</p> 
              <p>Banking services to accompany you every day, accessible everywhere and physical or virtual cards for your professional expenses.</p>
              <Button variant='dark' style={{borderRadius:'50px'}}>Open my account<MdKeyboardDoubleArrowRight size={'20px'}/></Button>
                </div>
                </div>
        </div> 
    </div>
  )
}
