// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_31f8ax3', // Replace with your EmailJS service ID
//       'template_w8tox71', // Replace with your EmailJS template ID
//       form.current,
//       'DtPV7BPiE6wc0PAH1zeGm'   // Replace with your EmailJS public key
//     )
//     .then((result) => {
//       console.log(result.text);
//       alert('Message sent successfully!');
//     }, (error) => {
//       console.log(error.text);
//       alert('Failed to send the message.');
//     });

//     // Optional: Reset form after submit
//     e.target.reset();
//   };

//   return (
//     <div id="contact">
//       <h1 className='contactpageTitle'>Contact Me</h1>
//       <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
//       <form className="contactForm" ref={form} onSubmit={sendEmail}>
//         <input type="text" className="name" placeholder='Your Name' name='Your_name' required />
//         <input type="email" className="email" placeholder='Your Email' name='Your_email' required />
//         <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
//         <button type='submit' value='send' className='submitBtn'>Submit</button>
//         <div className="links">
//           <img src="path-to-facebook-icon" alt="Facebook" className="link" />
//           <img src="path-to-twitter-icon" alt="Twitter" className="link" />
//           <img src="path-to-youtube-icon" alt="YouTube" className="link" />
//           <img src="path-to-instagram-icon" alt="Instagram" className="link" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
