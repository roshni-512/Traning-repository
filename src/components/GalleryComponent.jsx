import React from 'react'

export default function GalleryComponent() {
  return (
    <div style={{backgroundColor:'#F8EDFF'}}>
      <div className="container">
        <div className="col-12">
        <p style={{fontFamily:'Fraunces',fontSize:'30px',fontWeight:'600'}} className='text-center'>Everything to <span style={{fontFamily:'Fraunces', fontStyle:'italic', fontWeight:'100'}}>save</span> time</p>
        <p style={{fontFamily:'Montserrat',fontWeight:'600'}}  className='text-center'>A pro account that combines the best of both worlds.</p>
        </div>
        <div className='col-12 pt-5 text-center'>
        <img src={"./Images/card.png"} style={{ width: '20%' }} className='pb-5 rounded' alt='' />
        <img src={"./Images/card1 (2).png"} style={{ width: '20%' }} className='pb-5 mx-2 rounded' alt='' />
        <img src={"./Images/card2 (2).png"} style={{ width: '20%' }} className='pb-5 mx-0 rounded' alt='' />
        <img src={"./Images/card3 (2).png"} style={{ width: '20%' }} className='pb-5 mx-2 rounded' alt='' />
        </div>
      </div>
    </div>
  )
}
