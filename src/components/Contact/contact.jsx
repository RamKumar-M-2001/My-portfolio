import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/Adobe.png';
import Microsoft from '../../assets/Microsoft.png';
import Facebook from '../../assets/Facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_31f8ax3', 'template_w8tox71', form.current, {
        publicKey: 'DtPV7BPiE6wc0PAH1zeGm',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent !');
        },
        (error) => {
          // console.log('FAILED...', error.text);
          alert('Failed to send the message.');
        },
      );
      e.target.reset();
  };
  return (
    <section id='contactpage'>
        <div id="clients">
            <h1 className="contactpageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Client" className="clientImg" />
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" /> 

            </div>
        </div>
        <div id="contact">
          {/* <h1 className='contactpageTitle'>Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name"  placeholder='your Name' name='Your_name'/>
            <input type="email" className="email"  placeholder='Your Email' name='Your_email'/>
            <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button> */}
             <h1 className='contactpageTitle'>Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your Name' name='Your_name' required />
        <input type="email" className="email" placeholder='Your Email' name='Your_email' required />
        <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
        <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className="links">
              <img src={FacebookIcon} alt="Facebook" className="link" />
              <img src={TwitterIcon} alt="Twitter" className="link" />
              <img src={YouTubeIcon} alt="Youtube" className="link" />
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact