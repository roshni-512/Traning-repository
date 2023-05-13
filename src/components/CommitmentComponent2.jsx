import React from 'react'
import { Button } from 'react-bootstrap'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { MdAccountBalance } from 'react-icons/md'
import {MdGppGood } from 'react-icons/md'
import {MdVoicemail  } from 'react-icons/md'
import {MdLibraryBooks } from 'react-icons/md'
import {MdPlaylistAdd } from 'react-icons/md'
export default function CommitmentComponent2() {
  return (
   
    <div  style={{ backgroundColor: "#EADDF5"}}>
    <div className="container">
       <div className="row d-flex justify-content-around">
       
               <div className='col-12 col-md-5 mt-5 mb-5' >
               <p style={{ fontFamily: 'Fraunces', fontWeight: '600', fontStyle: 'italic', fontSize: '45px' }}>Entrepreneurship <span style={{ fontFamily: "serif", fontWeight: '100' }}>means</span> wanting <span style={{ fontFamily: "serif", fontWeight: '100' }}>to do more for </span> the world</p>
                <p style={{ fontSize: 'larger' }} >Then you are entitled to ask for the same from us.</p>
                <Button  variant='dark' style={{ borderRadius: '50px' }}>Our Commitment <MdKeyboardDoubleArrowRight size={'20px'} /></Button>
               </div>
               <div className='col-12 col-md-5 mt-5 mb-5'>
               <div> <MdAccountBalance style={{backgroundColor:'#E0C4FF',width:'12%',height:'50px',borderRadius:'5px',border:'5px white solid'}}/> Approved by the ACPR(Banque de france)</div>
               <div> <MdVoicemail style={{backgroundColor:'#E0C4FF',width:'12%',height:'50px',borderRadius:'5px',border:'5px white solid'}}/> Mastercard network</div>
               <div> <MdLibraryBooks style={{backgroundColor:'#E0C4FF',width:'12%',height:'50px',borderRadius:'5px',border:'5px white solid'}}/> Funds secured according to French regulations</div>
               <div> <MdGppGood style={{backgroundColor:'#E0C4FF',width:'12%',height:'50px',borderRadius:'5px',border:'5px white solid'}}/> Your data is encrypted and protected</div>
                <div> <MdPlaylistAdd style={{backgroundColor:'#E0C4FF',width:'12%',height:'50px',borderRadius:'5px',border:'5px white solid'}}/>Independent subsidiary of Société Générale</div> 
               </div>
               </div>
       </div> 
   </div>
   
   
  )
}

