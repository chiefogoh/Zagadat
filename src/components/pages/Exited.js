import React from 'react'
import './port.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from '../../Footer';


const Exited = () => {
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
           <a href="https://vydia.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./images/vydia.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Vydia</h1>
               <h3 className="south">Vydia provides an end-to-end solution to empower the next generation 
               of music creators, managers, and labels</h3>
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

export default Exited