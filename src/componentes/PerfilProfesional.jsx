import React from 'react';

function PerfilProfesional(props) {
  const { perfil } = props;

  return (
    <div className="cv-perfil-profesional">
      <h1 className='h1magen'>RIVERA JEREZ BRANDON DAVID</h1>
      <hr className="color" />
      <p>{perfil}</p>
    </div>
  );
}

export default PerfilProfesional;
