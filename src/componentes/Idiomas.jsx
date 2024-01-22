import React from 'react';

function Idiomas(props) {
  const { idiomas } = props;

  return (
    <div className="cv-inter">
      <h2>IDIOMAS</h2>
      <hr className="color" />
      {idiomas.map((idiomas, index) => (
        <div key={index} className="int">
          <li className="baseee"> {idiomas}</li>
        </div>
      ))}
    </div>
  );
}

export default Idiomas
