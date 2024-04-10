import React from 'react';

export const Gallery = ({ projects }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px',
    }}>
      {projects.map((project, index) => (
        <div key={index} style={{
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          transition: '0.3s',
          borderRadius: '5px',
          overflow: 'hidden',
        }}>
          <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
          <div style={{ padding: '20px' }}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

