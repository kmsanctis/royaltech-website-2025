import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-white text-center">
      <span className="footer-link"><NavLink to="/" className={({ isActive }) => `footer-link text-nowrap${isActive ? ' active' : ''}`}>Home &nbsp;</NavLink></span>
      <span className="footer-link"><NavLink to="/about" className={({ isActive }) => `footer-link text-nowrap${isActive ? ' active' : ''}`}>About Us &nbsp;</NavLink></span>
      <span className="footer-link"><NavLink to="/clientele" className={({ isActive }) => `footer-link text-nowrap${isActive ? ' active' : ''}`}>Clientele &nbsp;</NavLink></span>
      <span className="footer-link"><NavLink to="/products" className={({ isActive }) => `footer-link text-nowrap${isActive ? ' active' : ''}`}>Products &nbsp;</NavLink></span>
      <span className="footer-link"><NavLink to="/brochure" className={({ isActive }) => `footer-link text-nowrap${isActive ? ' active' : ''}`}>Brochures & Catalogue &nbsp;</NavLink></span>
      <span className="footer-link"><NavLink to="/contact" className={({ isActive }) => `footer-link text-nowrap${isActive ? ' active' : ''}`}>Contact Us</NavLink></span>
      <br />
      <span><i className="fa-solid fa-envelope"></i> <a href="mailto:sales@royaltechkuwait.com">sales@royaltechkuwait.com</a> &nbsp;</span>
      <span><i className="fa-brands fa-whatsapp"></i> +965 97891275 &nbsp;</span>
      <span><i className="fa-solid fa-phone"></i> +965 24916730/735 &nbsp;</span>
      <span><i className="fa-solid fa-fax"></i> +965 24916751</span>
      <br />
      <span><i className="fas fa-location-dot"></i> <a href="https://maps.app.goo.gl/FVGfAqp8F7c6twz67">Location</a> &nbsp;</span>
      <span><i class="fa-brands fa-instagram"></i> royaltech_electrical_company</span>
      <br />
      <span className="font-weight-bold">RoyalTech Electrical & Contracting Co. | 2025 &copy;</span>
    </footer>
  );
}

export default Footer;
