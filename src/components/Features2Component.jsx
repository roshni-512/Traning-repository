import { Button } from 'react-bootstrap'
import React from 'react'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const Features2Component = () => {
    return (
        <div style={{ backgroundColor:"#F8EDFF", padding:'1px'}} >
        <div className='container my-4' style={{fontFamily:"Fraunces"}} >
            <div className='row'>
                
                <div className='col-12 col-md-5'>
                    <img src={"./Images/Feature-2.png"} style={{width:'100%', float:'left'}} className=' w-sm-100' alt=''/>
                </div>
                <div className='col-12 col-md-7 ps-sm-5' style={{display:'fllex', alignSelf:'center'}}>
                <p style={{fontFamily:'Fraunces', fontWeight:'600', fontSize:'45px'}}>A partner more <span style={{fontFamily: "Fraunces",fontStyle:'italic' , fontWeight:'100'}}>than</span> a <span style={{fontFamily: "Fraunces",fontStyle:'italic', fontWeight:'100'}}>bank</span></p>
                <p style={{fontSize:'larger'}} className='my-4'>Banking services to accompany yu every day, accessable to everywhere and physical and virtual cards for professional expenses.</p>
                <Button variant='dark' style={{borderRadius:'50px'}}>Open my account<MdKeyboardDoubleArrowRight size={'20px'}/></Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Features2Component