import React from 'react'
import { Button } from 'react-bootstrap'
import { BiEuro } from 'react-icons/bi'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const DepositComponent = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#EADDF5' }}>
            <div className='row'>
                <div className='col-12 col-md-2 p-0 d-none d-md-block'>
                    <img src={'./Images/Cross.png'} height={"350px"} width={'100%'} />
                </div>
                <div className='col-12 col-md-7' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <p style={{ fontFamily: 'Fraunces', fontWeight: '600', fontStyle: 'italic', fontSize: '45px' }}>Instant <span style={{ fontFamily: "Fraunces", fontWeight: '100' }}>case</span> deposit</p>
                    <p style={{ fontSize: 'larger' }} className='mb-4'>Do you receive cash payments? Deposit upto <BiEuro />9,500 per month free of charge, at the collection point.</p>

                </div>
                <div className='col-12 col-md-3 pb-3 pb-md-0' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='dark' style={{ borderRadius: '50px' }} className='p-2'>Read more<MdKeyboardDoubleArrowRight size={'20px'} /></Button>

                </div>
            </div>
        </div>
    )
}

export default DepositComponent