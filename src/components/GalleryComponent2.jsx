import React from 'react'

export default function GalleryComponent2() {
  return (
    <div style={{backgroundColor:'#F8EDFF'}}>
           <div className="container">
        <div className="col-12">
        <p style={{fontFamily:'Fraunces',fontSize:'50px',fontWeight:'600'}} className='text-center'>Services <span style={{fontFamily:'Fraunces', fontStyle:'italic', fontWeight:'100'}}> adapted </span>for each company</p>
        <p style={{fontFamily:'Montserrat',fontWeight:'600'}}  className='text-center'>Even those who prefer to be called otherwise.</p>
        </div>
        <div className='col-12 pt-5 text-center'>
        <img src={"./Images/display1.png"} style={{ width: '20%' }} className='pb-5 rounded' alt='' />
        <img src={"./Images/display2.png"} style={{ width: '20%' }} className='pb-5 mx-2 rounded' alt='' />
        <img src={"./Images/display3.png"} style={{ width: '20%' }} className='pb-5 mx-0 rounded' alt='' />
        <img src={"./Images/display1.png"} style={{ width: '20%' }} className='pb-5 mx-2 rounded' alt='' />
    
        </div>
      </div>
    </div>
  )
}
