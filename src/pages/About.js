import React from 'react';

import './About.css';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-hero-title pixel-text-smooth">About Us</h1>
      </div>

      {/* Intro Summary */}
      <div className="about-summary">
        <p>
          We are committed to delivering excellence in every solution we provide. Our team brings experience, passion, and innovation together to serve our clients with unmatched quality.
        </p>
      </div>

      {/* Who We Are / What We Do Section */}
      <div className="about-section container">
        <div className="row">
          <div className="col-md-6 about-text-block">
            <h2 className='about-heading'>Who We Are</h2>
            <p className='pixel-text-smooth'>ROYALTECH Electrical & Contracting Co. was founded to provide high-quality electrical supplies and services across Kuwait. The company began by distributing a wide range of electrical products — including equipment, tools, machinery, fittings, and general supplies.</p>
            <p className='pixel-text-smooth'>Under the leadership of our Managing Director, Mr. Stany Sanctis, and supported by a dedicated team of professionals, ROYALTECH has grown into one of the leading trading establishments in the industry. We have built long-term partnerships with major customers by delivering timely, efficient, and cost-effective solutions.</p>
            <p className='pixel-text-smooth'>With over 2 decades of experience in marketing, distribution, and imports, Mr. Sanctis plays a pivotal role in shaping our strategic direction. His expertise remains the foundation of our ongoing growth and business development.</p>
          </div>
          <div className="col-md-6 about-text-block">
            <h2 className='about-heading'>Our Strategy</h2>
            <p className='pixel-text-smooth'>Our strategy is centered on continuously sourcing diverse, high-quality products to meet customer needs, while delivering reliable and convenient service.</p>
            <p className='pixel-text-smooth'>We aim to provide the best possible solutions and take full advantage of market opportunities to introduce value-driven products and services.</p>
            <h2 className='about-heading'>Products & Quality</h2>
            <p className='pixel-text-smooth'>All our products are sourced from globally recognized manufacturers, selected based on the strict quality standards set by our company. At ROYALTECH, “Quality Control & Reliability” is more than a principle — it is the foundation of our growth.</p>
            <p className='pixel-text-smooth'>Our commitment to quality extends beyond product selection; we believe that true quality begins with earning and upholding the trust and satisfaction of our customers.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us container">
        <h2 className="text-center mb-4 about-heading">Why Choose Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="choose-card">
              <h5>Reliable Solutions</h5>
              <p>We deliver dependable, high-quality outcomes for every project.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="choose-card">
              <h5>Expert Team</h5>
              <p>Our experienced professionals bring skill and precision to every challenge.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="choose-card">
              <h5>Customer Focused</h5>
              <p>We prioritize your needs with personalized, flexible support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
