import React from 'react'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from '../../Footer';


const Finetech = () => {
  return (
   
    <div className="App">

      <div className="james">

      <div className="investing">
           <h1 className="oh">Our Portfolio</h1>
           <h3 className="o2"> We believe that every business has it's growth potential
            and we tend to support the creative ideas 
            of founders and investing in their companies </h3>
        </div>
       
       <div className="rod"> 
       <h1><Droppy/></h1>
       <h1><Dropin/></h1>
       </div > 
     


       <div className="Portfolio">
       <h1 className="port">{/* hhs */}  </h1> 
           
           <div className="cont">

           <div className="ban">
           <a href="https://www.paisa.mx/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./celebration.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Paisa</h1>
               <h3 className="south">Paisa builds financial security for families</h3>
           </div>

           <div className="ban">
           <a href="https://apata.com/" target="_blank"   rel='noreferrer' className="image-container">
               <img src='./apata.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Apata</h1>
               <h3 className="south">Apata builds the best 3D Secure solution for Fintech issuers & processors, ensuring ongoing access to freliable, competitive, and easy-to-adopt capabilities</h3>
           </div>

           <div className="ban">
           <a href="https://www.pawapay.io/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./pawapay.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> PawaPay</h1>
               <h3 className="south">Pawapay provides one API and one portal to integrate
               mobile money across Africe into your payment processes</h3>
           </div>


           </div>

        </div>




        <div>
          <Footer/>
          </div>

      </div>
  
  </div>
  )
}

export default Finetech