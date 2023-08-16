import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import Loader from "../Loader";
import './Portfolio.css'
import Dropin from "./Dropin";
import Droppy from "./Droppy";
import Footer from "../../Footer";

const Portfolio = () => {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay     
  //   const delay = setTimeout(() => {
  //     setIsLoading(false);
  
  //   }, 3000);

  //   // Cleanup
  //   return () => clearTimeout(delay);
  // }, []);

  return (
    <div className="App">
      {/* {isLoading ? 
        <Loader />
      : ( */}
        
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
             
             <div className="awe">

             <div className="brown">
              <a href="https://apata.com/" target="_blank"   rel='noreferrer' className="image-container">
               <img src='./apata.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Apata</h1>
               <h3 className="south">Apata builds the best 3D Secure solution for Fintech issuers & processors, ensuring ongoing access to freliable, competitive, and easy-to-adopt capabilities</h3>
             </div>

           
             <div className="brown">
              <a href="https://www.capetowntigers.com/" target="_blank"  rel='noreferrer'   className="image-container">
               <img src='./capetown.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Cape Town Tigers</h1>
               <h3  className="south">The Cape Town Tigers are a a south African basketball
                team based in Gauteng. South Africa's National Champions and 
                winners of the 2021 Road to BAL Qualifier,21-23 October, in UJ Soweto Campus Arena.
               </h3>
               </div>
        

           
             <div className="brown">
              <a href="https://decagon.institute/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./decagon.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Decagon</h1>
               <h3 className="south">Decagon is elite software engineerinand leadership training institute institute that equips high potential talent with world-class software engineering andleadership skills</h3>
             </div>

           
             <div className="brown">
              <a href="https://www.eraclimate.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./era.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> ERA</h1>
               <h3 className="south">ERA makes it more efficient to buy and sell carbon 
               offsets and they stimulate their supply and direct money to real climate impact</h3>
             </div>

           
             <div className="brown">
              <a href="https://ouredenlife.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./eden.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> Eden Life</h1>
               <h3  className="south">Eden is technology + the best parts of humanity (empathy, institution and efficiency)
               that keeps your home running efficiently so you can live your life</h3>
                </div>
           
             <div className="brown" id="port">
              <a href="https://empawaafrica.com/" target="_blank"  rel='noreferrer'  className="image-container">
               <img src='./empawa.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> EmPawa</h1>
               <h3 className="south">EmPawa is an initiative to help new artists raech their full
                potential musically be equipping them with the knowledge and funding to do so</h3>
             </div>
            
             <div className="brown">
              <a href="https://www.paisa.mx/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./celebration.png' alt="ll" className="picture"/>
               </a>
               <h1 className="west"> Paisa</h1>
               <h3 className="south">Paisa builds financial security for families</h3>
             </div>

             <div className="brown">
              <a href="https://www.pawapay.io/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./pawapay.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> PawaPay</h1>
               <h3 className="south">Pawapay provides one API and one portal to integrate
               mobile money across Africe into your payment processes</h3>
             </div>

        
             <div className="brown">
              <a href="https://rukahair.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./Ruka Hair.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Ruka Hair</h1>
               <h3 className="south">Ruka Hair aims to depart from broad categories such as 'coily' or 'kinky' 
               and sell a variety of hair extensions that mimic real curl patterns </h3>
             </div>

             <div className="brown">
              <a href="https://shoobs.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./shoobs.png' alt="love" className="picture"/>
               </a>
               <h1 className="west"> Shoobs</h1>
               <h3 className="south"> Shoobs is the online discovery & ticketing platform for urban nightlife 
               events.From celebratory club nights, and concerts, to comedy nights,
                networking events & more; Shoobs has you covered</h3>
             </div>

           
             <div className="brown">
              <a href="https://vydia.com/" target="blank"  rel='noreferrer'  className="image-container">
               <img src='./vydia.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Vydia</h1>
               <h3 className="south">Vydia provides an end-to-end solution to empower the next generation 
               of music creators, managers, and labels</h3>
             </div>
           
             <div className="brown" id="port">
              <a href="https://www.betpawa.ng/" target="_blank"  rel='noreferrer'  className="image-container">
               <img src='./betpawa.png' alt="love" className="picture"/>
               </a>
               <h1 className="west">Betpawa</h1>
               <h3 className="south">BetPawa's mission is to provide a home for all of Africa's dreamers.
                A place where everyone has the same opportunity to achieve anything they can thin</h3>
             </div>
              </div>

             <div>
          <Footer/>
          </div>

          </div>


        </div>
      {/* )} */}
    </div>
  );
};

export default Portfolio;

