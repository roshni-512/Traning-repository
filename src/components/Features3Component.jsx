import React from 'react'

export default function Features3Component() {
  return (
    <div style={{ backgroundColor: "#F8EDFF", padding: '1px' }} >
     <div className="container my-4">
        <div className="row"style={{display:'flex', justifyContent:'space-between'}}>
        <div className='col-7 col-md-7 pe-sm-5' style={{ display: 'fllex', alignSelf: 'center',float:'right' }}>
                        <p style={{ fontFamily: 'Fraunces', fontWeight: '600', fontSize: '90px' }} className='pt-5'>More <span style={{ fontFamily: "Fraunces", fontStyle: 'italic', fontWeight: '100' }}>agile</span>  than a <br></br></p>
                        <p classname="pt-0"style={{ fontFamily: 'Fraunces', fontWeight: '600', fontSize: '70px',alignSelf:'center' }}>tradtional <span style={{ fontFamily: "Fraunces", fontStyle: 'italic', fontWeight: '100' }}>bank</span>  more</p> 
                    </div>
                    <div className='col-5 col-md-5 mt-5'>
                        <img src={"./Images/Mask group.png"} style={{ width: '30%', float: 'left' }} className='pt-5 mx-auto' alt='' />
                    </div>
                    <div className="row">
                      <div>
                      <p style={{ fontFamily: 'Fraunces', fontWeight: '600', fontSize: '80px' }}>More <span style={{ fontFamily: "Fraunces", fontStyle: 'italic', fontWeight: '100' }} >human than an online bank</span></p>
                      <p style={{fontSize:'20px', fontWeight:'600'}} className='pt-5'>A pro account that combines the best of both worlds.</p>
                      </div>
                    </div>
        </div>
     </div>
    </div>
  )
}
