import React from 'react';

function Intereses(props) {
  const { intereses } = props;

  return (
    <div className="cv-inter">
      <h2>INTERESES</h2>
      <hr className="color" />
      {intereses.map((interes, index) => (
        <div key={index} className="int">
          <li className="baseee"> {interes}</li>
        </div>
      ))}
    </div>
  );
}

export default Intereses;
