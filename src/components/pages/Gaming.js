import React from 'react'
import './port.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from '../../Footer';


const Gaming = () => {
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
           <a href="https://www.betpawa.ng/" target="_blank"  rel='noreferrer'  className="image-container">
               <img src='./images/betpawa.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Betpawa</h1>
               <h3 className="south">BetPawa's mission is to provide a home for all of Africa's dreamers.
                A place where everyone has the same opportunity to achieve anything they can thin</h3>
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

export default Gaming