import React from 'react';

import ClientGrid from '../components/ClientGrid/ClientGrid';

import './Clientele.css';

import KOCLogo from '../assets/KOC_Logo.png';
import GECLogo from '../assets/GEC_Logo.png';
import FAWAZLogo from '../assets/FAWAZ_Logo.png';
import JWLogo from '../assets/JW_Logo.png';
import UFMLogo from '../assets/UFM_Logo.jpg';
import TAMDEENLogo from '../assets/TAMDEEN_Logo.png';
import ECOVERTLogo from '../assets/ECOVERT_Logo.png';
import CITYHYPERLogo from '../assets/CITY_Logo.png';
import PEARLLogo from '../assets/PEARL_Logo.jpeg';
import INFINITYLogo from '../assets/INFINITY_Logo.png';
import REGENCYLogo from '../assets/REGENCY_Logo.webp';
import ARABILogo from '../assets/ARABI_Logo.png';
import UESLogo from '../assets/UES_Logo.jpeg';
import DHOWLogo from '../assets/DHOW_Logo.jpeg';
import LIFELogo from '../assets/LIFE_Logo.png';
import FOURLogo from '../assets/FOUR_Logo.png';
import BMBLogo from '../assets/BMB_Logo.jpeg';
import WALDORFLogo from '../assets/WALDORF_Logo.webp';

function Clientele() {
  const clients = [
    { name: 'Kuwait Oil Company', logo: KOCLogo },
    { name: 'Gulf Engineering Company K.S.C.C.', logo: GECLogo },
    { name: 'Fawaz Trading & Engineering Services Co. WLL', logo: FAWAZLogo },
    { name: 'United Engineering Services Co. W.L.L.', logo: UESLogo },
    { name: 'Ecovert General Trading & Contracting Co.', logo: ECOVERTLogo},
    { name: 'Al-Dhow General Trading & Contracting Co. W.L.L.', logo: DHOWLogo },
    { name: 'United Facilities Management', logo: UFMLogo },
    { name: 'Bader Al Mulla & Brothers Company S.P.C.', logo: BMBLogo },
    { name: 'JW Marriott & Marriott Group Hotels - Kuwait', logo: JWLogo },
    { name: 'The Regency - Kuwait', logo: REGENCYLogo },
    { name: 'Waldorf Astoria - Kuwait', logo: WALDORFLogo },
    { name: 'Four Seasons - Kuwait', logo: FOURLogo },
    { name: 'Tamdeen Real Estate Co. K.S.C.C.', logo: TAMDEENLogo },
    { name: 'Pearl Construction', logo: PEARLLogo },
    { name: 'Infinity Constructions', logo: INFINITYLogo },
    { name: 'Life Energy', logo: LIFELogo },
    { name: 'Arabi Company W.L.L.', logo: ARABILogo },
    { name: 'City Hypermarket', logo: CITYHYPERLogo },
  ];

  return (
    <div>
      <div className="client-hero">
        <h1 className="client-hero-title pixel-text-smooth">Our Valued Clients</h1>
      </div>

      <div className="client-summary">
        <p>We take pride in collaborating with a diverse range of industry leaders. Our clients trust us to deliver reliable, innovative solutions — and their continued partnership is at the heart of everything we do.</p>
      </div>

      <div className="container">
        <ClientGrid clients={clients} />
      </div>
    </div>
  );
}

export default Clientele;
