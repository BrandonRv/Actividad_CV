//import React, { useState } from 'react';

function Formularios() {

  return (
<>
<input type='text' id="nomb" className='espacio-input' placeholder='Nombre y Apellido' />
From
<input type='text' id="empr" className='espacio-input2' placeholder='Empresa donde Trabajo' />
<br />
<input type='text' id="prof" className='espacio-input' placeholder='Profesión' />
-
<input type='number' id="tele" className='espacio-input3' placeholder='Numero de Teléfono' />
<br />
<br />
<div className='cajitabtn'>
<button className='cajitabtn' type="submit">Guardar</button>
</div>
</>
  );
}

export default Formularios;
