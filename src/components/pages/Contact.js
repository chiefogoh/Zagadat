import React, { useState, useEffect } from "react";
import { useRef } from 'react';
import Loader from "../Loader";
import './Contact.css'
import emailjs from "@emailjs/browser"
import Footer from "../../Footer";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSent, setIsSent] = useState(null);


  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
  
    }, 3000);

    // Cleanup
    return () => clearTimeout(delay);
  }, []);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
    .sendForm('service_wr9cgs8', 'template_9ykv9ne', form.current, 'uuYJ5wKep8DlK6aE5')
    .then((result) => {
      console.log(result.text);
      setIsSent(true); // Update the state to show the success message
      setTimeout(() => setIsSent(null), 7000); // Hide the success message after 5 seconds
    })
    .catch((error) => {
      console.log(error.text);
      setIsSent(false); // Update the state to show the error message
      setTimeout(() => setIsSent(null), 7000); // Hide the error message after 5 seconds
    });
  
        e.target.reset();
    
  }



  return (
    <div className="App">
      {isLoading ? 
        <Loader />
       : (
        
        <div className="home">

          <div className="investing">
             <h1 className="oh" id='cont'>Contact Us</h1>
             <h3 className="o2"> We love investing in cool ideas.
             if you want to build something big and 
             are looking for the right partner to help you grow - let's talk</h3>

          </div>
          {isSent === true && (
  <div className="seg">
    <p className="sent">Your contact has been sent successfully!</p>
  </div>
   )}
   {isSent === false && (
  <div className="seg">
    <p className="error">Try again, contact details were not sent.</p>
  </div>
   )} 
         
          <div className="dobe">
      
          <div className="wen">            
        <h1 className="don"> Write to us</h1>
        <h3 className="obo">We'll make to sure to get in touch with you as soon as possible</h3>
          </div>

          <div className="band">
         
        <form ref={form} onSubmit={sendEmail}>
    <label className='label'>Full Name</label> <br/>
    <input type='text' placeholder='John Doe'  name='from_name' className='input'required/><br/>
<br/>
    <label className='label'>Email Address</label> <br/>
    <input type='email' placeholder='name@company.com' name='from_email' className='input' required/><br/>
   <br/>

     <label className='label'>Website Url</label> <br/>
    <input type='text' placeholder='www.google.com'  name='from_websiteurl'  required className='input'/><br/>
  <br/>

    <label className='label'>Message</label><br/>
    <textarea rows="4" cols="50" className='area'  name='message'  required placeholder='Write your message'/><br/>
   

    <input type='submit'  value='Send Details' className='message'/>
   </form>
       
          </div>
        </div>
      
     
      <div>
        <Footer/>
      </div>

        </div>

       )}
    </div>
  );
};

export default Contact;

