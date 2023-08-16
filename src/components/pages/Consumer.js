import React from 'react'
import './port.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from '../../Footer';

const Consumer = () => {
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
           <a href="https://rukahair.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./Ruka Hair.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Ruka Hair</h1>
               <h3 className="south">Ruka Hair aims to depart from broad categories such as 'coily' or 'kinky' 
               and sell a variety of hair extensions that mimic real curl patterns </h3>
           </div>

           <div className="ban">
           <a href="https://ouredenlife.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./eden.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> Eden Life</h1>
               <h3  className="south">Eden is technology + the best parts of humanity (empathy, institution and efficiency)
               that keeps your home running efficiently so you can live your life</h3>
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

export default Consumer