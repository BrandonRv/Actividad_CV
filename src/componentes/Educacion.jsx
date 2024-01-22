import React from 'react';

function Educacion(props) {
  const { educacion } = props;

  return (
<>
      {educacion.map((edu, index) => (
       <div key={index} className="edu">
       <div className='cajasss'>
        <div className='fechasss'>
        <p className='altobajo'>{edu.periodoini}</p>
        <p className='altobajo'>{edu.periodofin}</p>
        <br />
        <div>
        <small className='negritasskk'>PERFIL OCUPACIONAL</small>
        </div>
        </div>
         <div className='fechasexp1'>
         <small className='negritass'>{edu.titulo}</small>
         <br />
         <small>{edu.institucion}</small>
          <p>{edu.descripcion}</p>
      </div>
    </div>
  </div>
))}
<div className='cajitabtn'>  
<button className='btn-agregar'>Agregar Nuevos Edtudios</button>
</div>
</>
  );
}

export default Educacion;
