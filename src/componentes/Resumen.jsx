import React from 'react';

function Resumen(props) {
  const { habilidades } = props;

  return (
    <div className="cv-resumen">
      <h2>HABILIDADES</h2>
      <hr className="color" />
      {habilidades.map((habilidad, index) => (
        <div key={index} className="sum">
          <li className="baseee"> {habilidad}</li>
        </div>
      ))}
    </div>
  );
}

export default Resumen;
