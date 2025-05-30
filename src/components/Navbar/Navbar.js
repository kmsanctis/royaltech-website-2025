import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import logo from '../../assets/RT_Logo.jpg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark border-bottom">
      <span className="navbar-brand d-flex align-items-center">
        <img
          src={logo}
          alt="RoyalTech Logo"
          className='navbar-logo'
        />
        <span className="navbar-title-royal">Royal</span><span className='navbar-title-tech'>Tech&nbsp;</span><span className='navbar-title-end'>Electrical & Contracting Co.</span>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => `nav-link text-nowrap${isActive ? ' active' : ''}`}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => `nav-link text-nowrap${isActive ? ' active' : ''}`}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/clientele" className={({ isActive }) => `nav-link text-nowrap${isActive ? ' active' : ''}`}>Clientele</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className={({ isActive }) => `nav-link text-nowrap${isActive ? ' active' : ''}`}>Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/brochure" className={({ isActive }) => `nav-link text-nowrap${isActive ? ' active' : ''}`}>Brochures & Catalogue</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => `nav-link text-nowrap${isActive ? ' active' : ''}`}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
