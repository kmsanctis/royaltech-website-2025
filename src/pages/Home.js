import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import aboutIcon from '../assets/About.png';
import clienteleIcon from '../assets/Clientele.png';
import productsIcon from '../assets/Products.png';
import brochureIcon from '../assets/Brochure.png';
import contactIcon from '../assets/Contact.png'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="home-hero">
        <h1 className="home-hero-title">Solutions that work for you....... Guaranteed.</h1>
      </div>

      {/* Intro Section */}
      <div className="container-fluid pt-4" id="homepage">
        <div className="row justify-content-center">
          <div className="col-9 intro">
            <p className='pixel-text-smooth'>At ROYALTECH Electrical & Contracting Co., we believe our clients are our most important asset. We strive to build long-term relationships by consistently delivering quality products and services — promptly and as promised.</p>
            <p className='pixel-text-smooth'>Our policy is built on a simple principle: a constant search for diverse, high-quality products that meet every customer need, delivered with a commitment to functional, convenient, and customer-focused service.</p>
          </div>
        </div>

        {/* Quick Nav Cards */}
        <div className="row py-4 justify-content-center">

          <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="quick-nav-item text-center">
              <img src={aboutIcon} alt="About us icon" className="quick-nav-img" />
              <p>
                Get to know who we are! <Link to="/about"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="quick-nav-item text-center">
              <img src={clienteleIcon} alt="Clientele icon" className="quick-nav-img" />
              <p>
                Meet the clients that trust us! <Link to="/clientele"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              </p>
            </div>
          </div>


          <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="quick-nav-item text-center">
              <img src={productsIcon} alt="Products icon" className="quick-nav-img" />
              <p>
                Explore our product lineup! <Link to="/products"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              </p>
            </div>
          </div>


          <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="quick-nav-item text-center">
              <img src={brochureIcon} alt="Brochure icon" className="quick-nav-img" />
              <p>
                Discover our latest brochures! <Link to="/brochure"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              </p>
            </div>
          </div>


          <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="quick-nav-item text-center">
              <img src={contactIcon} alt="Contact us icon" className="quick-nav-img" />
              <p>
                React out - we're here to help! <Link to="/contact"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
