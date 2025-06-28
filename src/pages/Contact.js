import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_lfhgncg', 'template_xhp5fkv', form.current, 'K6kkeVsr1dmW9512g')
    .then((result) => {
      alert('Message sent successfully! Our team will get back to you at the earliest.');
      e.target.reset();
    }, (error) => {
      alert('Failed to send message, please try again later.');
      console.error(error.text);
    });
  };

  return (
    <div>
      
      <div className="contact-hero">
        <h1 className="contact-hero-title pixel-text-smooth">Connect with Us!</h1>
      </div>

      <div className="contact-summary">
        <p>We’re here to help! Reach out to us via phone, whatsapp, email, or visit us at our showroom — we’d love to hear from you.</p>
      </div>

      <h2 className="info-heading">General Information</h2>

      <div className="container d-flex justify-content-center align-items-start gap-4 flex-wrap contact-top-section py-3" data-aos='fade-up'>
        <div className="info-card">
          <p><i className="fas fa-envelope"></i> Email: <a href="mailto:sales@royaltechkuwait.com">sales@royaltechkuwait.com</a></p>
          <p><i className="fa-brands fa-whatsapp"></i> WhatsApp: +965 97891275 &nbsp; <i class="fa-brands fa-instagram"></i> Instagram: royaltech_electrical_company</p>
          <p><i className="fas fa-phone"></i> Telephone: +965 24916730/735</p>
          <p><i className="fas fa-fax"></i> Fax: +965 24916751</p>
          <p><i className="fas fa-location-dot"></i> Location: Shuwaikh Industrial Area, Block 1, Street 18, Building 148, Office 11, Shuwaikh, Kuwait</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.454156034489!2d47.94381787518364!3d29.327683175292258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9ac682096515%3A0xbe2b44fac8ba897!2sRoyalTech%20Electrical!5e0!3m2!1sen!2skw!4v1746546155598!5m2!1sen!2skw"
            width="100%"
            height="248"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RoyalTech Location"
          ></iframe>
        </div>
      </div>

      <h2 className="info-heading">Contact Form</h2>

      <div className='container d-flex justify-content-center py-3' data-aos='fade-up'>
        <div className="contact-form-container">
          <h3 className="form-title">Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="user_name" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" name="message" id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contact;
