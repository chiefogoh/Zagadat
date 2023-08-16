import React from 'react'
import './port.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from '../../Footer';


const Sports = () => {
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
           <a href="https://www.capetowntigers.com/" target="_blank"  rel='noreferrer'   className="image-container">
               <img src='./capetown.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Cape Town Tigers</h1>
               <h3  className="south">The Cape Town Tigers are a a south African basketball
                team based in Gauteng. South Africa's National Champions and 
                winners of the 2021 Road to BAL Qualifier,21-23 October, in UJ Soweto Campus Arena.
               </h3>
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

export default Sports