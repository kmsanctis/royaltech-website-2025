import React from 'react';

import './Brochure.css';

import RT_Brochure from '../assets/RT_Brochure.png';
//import RTxLK_Brochure from '../assets/RTxLK_Brochure.png';
import RT_Catalogue_Page_1 from '../assets/RT_Catalogue_Page_1.png';
import RT_Catalogue_Page_2 from '../assets/RT_Catalogue_Page_2.png';

function Brochure() {
  return (
    <div>
      <div className="brochure-hero">
        <h1 className="brochure-hero-title pixel-text-smooth">Brochures & Catalogue</h1>
      </div>

      <div className="brochure-summary">
        <p>Discover our range of products and services through our latest brochures and catalogues. Each publication reflects our commitment to quality and delivering tailored solutions for our clients.</p>
      </div>

      <h2 className="brochure-heading">RoyalTech Brochure</h2>

      <div className="brochure-image-wrapper" data-aos='fade-up'>
        <img src={RT_Brochure} alt="RoyalTech Brochure" className="brochure-image" />
        <div className="split-download-btn">
          <div className="btn-text">Download Brochure</div>
            <a href="/RT_Brochure.pdf" download className="btn-icon" title="Download Brochure">
              <i className="fas fa-download"></i>
            </a>
        </div>
      </div>

      <h2 className="brochure-heading">RoyalTech Catalogue</h2>

      <div className="catalogue-image-wrapper" data-aos="fade-up">
          <img src={RT_Catalogue_Page_1} alt="RoyalTech Catalogue Page 1" className="catalogue-image" />
          <img src={RT_Catalogue_Page_2} alt="RoyalTech Catalogue Page 2" className="catalogue-image catalogue-image-2" />
      </div>
      <div className="split-download-btn-catalogue">
          <div className="btn-text">Download Catalogue</div>
            <a href="/RT_Catalogue.pdf" download className="btn-icon" title="Download Catalogue">
              <i className="fas fa-download"></i>
            </a>
      </div>

      {/*<h2 className="brochure-heading">RoyalTech X Lauritz Knudsen Brochure</h2>

      <div className="brochure-image-wrapper" data-aos='fade-up'>
        <img src={RTxLK_Brochure} alt="RoyalTech X Laurtiz Knudsen Brochure" className="brochure-image" />
        <div className="download-btn-container">
          <a href="/RTxLK_Brochure.pdf" download className="download-brochure-btn">
            Download Brochure
          </a>
        </div>
      </div>*/}
    </div>
  );
}

export default Brochure;
