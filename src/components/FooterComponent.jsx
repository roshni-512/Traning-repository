import React from 'react'

export default function FooterComponent() {
  return (
    <div style={{backgroundColor:'#F8EDFF'}}>
     
<div className="container ">

    <footer className="text-center text-lg-start   ">

    <div className="container p-4">

      <div className="row">
  
        <div className="col-lg-3 col-md-6 mb-4 ">
          <h5 className="mb-4" style={{fontWeight:'600',fontFamily:'Fraunces'}}>Products</h5>

          <ul className="list-unstyled">
            <li  style={{color:'grey',fontSize:'12px'}}>
              <p >New Products</p>
              <p >Bank Cards</p>
              <p >Book-Keeping</p>
              <p >Invoicing</p>
              <p >Extra and insurance</p>
              <p >Professional Loan</p>
              <p >Safety</p>
              <p >Sponsership</p>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-4" style={{fontWeight:'600',fontFamily:'Fraunces'}}>Our Resources</h5>

          <ul className="list-unstyled">
          <li style={{color:'grey',fontSize:'12px'}}>
              <p >Our Prices</p>
              <p >Co-piolt-blog</p>
              <p >Pro bank Comparision</p>
              <p >Contract Template</p>
              <p >Income Simulator</p>
              <p >Workshop & videos</p>
              <p >Contract Template</p>
              <p >Income Simulator</p>
              <p >The Larten - Newsletter</p>
            </li>
          </ul>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="text-uppercase mb-4" style={{fontWeight:'600',fontFamily:'Fraunces'}}>In Regards to</h5>

          <ul className="list-unstyled">
          <li style={{color:'grey',fontFamily:'Montserrat',fontSize:'12px'}}>
              <p >Building a responsible bank</p>
              <p >Co-piolt-blog</p>
              <p >Work at Shine</p>
              <p >Become a Chartered accountent partner</p>
              <p >Become an ambassador</p>
              <p >Contact us</p>
              
            </li>
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className=" mb-4" style={{fontWeight:'600',fontFamily:'Fraunces'}}>Subscribe</h5>

          <div className="form-outline form-white mb-4">
            <input type="email" id="form5Example2" className="form-control" placeholder='email address'/>
            <label className="form-label" for="form5Example2"></label>
          </div>

         <p style={{color:'grey',fontSize:'12px'}}>Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just insight</p>
        </div>
       
      </div>
    
    </div>
   
   
  </footer>
  
</div>
    </div>
  )
}
