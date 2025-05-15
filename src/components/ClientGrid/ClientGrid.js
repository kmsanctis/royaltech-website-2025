import React from 'react';

import './ClientGrid.css';

function ClientGrid({ clients }) {
  return (
    <div className="client-grid">
      {clients.map((client, index) => (
        <div className="client-card" data-aos='fade-in' key={index}>
          <img src={client.logo} alt={`${client.name} logo`} />
          <p>{client.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ClientGrid;
