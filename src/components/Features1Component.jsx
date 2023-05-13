import { Button } from 'react-bootstrap'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Features1Component = () => {
    return (
        <div style={{ backgroundColor: "#F8EDFF", padding: '1px' }} >
            <div className='container my-4' style={{ fontFamily: "Fraunces" }} >
                <div className='row' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='col-12 col-md-7 ps-sm-5' style={{display:'fllex', alignSelf:'center'}}>
                <p style={{fontFamily:'Fraunces', fontWeight:'600', fontSize:'45px'}}>More <span style={{fontFamily: "Fraunces",fontStyle:'italic' , fontWeight:'100'}}>Fluid</span> management</p>
                <p style={{fontSize:'larger'}} className='my-4'>Banking services to accompany yu every day, accessable to everywhere and physical and virtual cards for professional expenses.</p>
                <Button variant='dark' style={{borderRadius:'50px'}}>Open my account<MdKeyboardDoubleArrowRight size={'20px'}/></Button>
                </div>
                    <div className='col-12 col-md-5'>
                        <img src={"./Images/Feature1.png"} style={{ width: '100%', float: 'right' }}  alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features1Component