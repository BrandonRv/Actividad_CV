//import React, { useState } from 'react';


function Formularios() {

    //const { referencias } = props;

    //const [referenciasIndex, setReferenciasIndex] = useState(referencias);

    // const [nombre, setNombre] = useState('');
    // const [empresa, setEmpresa] = useState('');
    // const [profesion, setProfesion] = useState('');
    // const [telefono, setTelefono] = useState('');



// function anadir() {
//   const nuevaReferencia = {
//     nombre: nombre,
//     empresa: empresa,
//     cargo: profesion,
//     telefono: telefono
//    };
//   setReferenciasIndex(prevReferencias => [...prevReferencias, nuevaReferencia]);
//   // Limpiar los campos de entrada después de guardar
//   setNombre('');
//   setEmpresa('');
//   setProfesion('');
//   setTelefono('');
//   console.log(referenciasIndex);
// }


const handleSubmit = (e) => {
  e.preventDefault();
  // const texto = e.target[e].value;
  const inputTitulo = document. querySelector ("#nomb");
  console.log(inputTitulo.value);
  // setTitle(texto);
};
  




// function anadir() {
//     const nuevaReferencia = `${nombre} ${empresa} ${profesion} ${telefono}`;
//     console.log(nuevaReferencia)
// }

  return (
<>
<li className="referrr">
<div className='fechasexp2'>
<form onSubmit={handleSubmit}>
<input type='text' id="nomb" className='espacio-input' placeholder='Nombre y Apellido' onChange={(e) => setNombre(e.target.value)} />
From
<input type='text' id="apel" className='espacio-input2' placeholder='Empresa donde Trabajo' onChange={(e) => setEmpresa(e.target.value)} />
<br />
<input type='text' id="prof" className='espacio-input' placeholder='Profesión' onChange={(e) => setProfesion(e.target.value)} />
-
<input type='text' id="tele" className='espacio-input2' placeholder='Numero de Teléfono' onChange={(e) => setTelefono(e.target.value)} />
<br />
<br />
<div className='cajitabtn'>
<button className='cajitabtn' type="submit">Guardar</button>
</div>
</form>
</div>
</li>
{/* <br />
<div className='cajitabtn'>  
<button>Guardar</button>
{/* onClick={anadir} */}
{/* </div> */} 
</>
  );
}

export default Formularios;

/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////RESPALDO DE REFERENCIAS////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//import React from 'react';
//import { useState } from 'react';
//import Formularios from './Formularios'

//function Referencias(props) {
  const { referencias } = props;
  const [tareasss, setTareasss] = useState();

  function nuevaTarea(){
   const agregarList = document.getElementById('listaaa');
   setTareasss(!tareasss)
   if(!tareasss){
    agregarList.style = "display:block";
   }else{
    agregarList.style = "display:none";
  }

  }
  //const nuevaTarea = () => setTareasss(!tareasss);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = document. querySelector ("#nomb");
    const empresa = document. querySelector ("#empr");
    const profesion = document. querySelector ("#prof");
    const telefono = document. querySelector ("#tele");
    const nuevaReferencia = [{
      nombre: nombre.value,
      empresa: empresa.value,
      cargo: profesion.value,
      telefono: telefono.value,
    }];
    console.log(nuevaReferencia);
  };

  return (
<>
        {referencias.map((refe, index) => (
       <li key={index} className="referrr">
         <div className='fechasexp2'>
         <small className='negritass'>{refe.nombre} From {refe.empresa}</small>
         <br />
         <small>{refe.cargo} - {refe.telefono}</small>
      </div>
  </li>
))}
<div id="listaaa">
<li className="referrr">
<div className='fechasexp2'>
<form onSubmit={handleSubmit}>
{tareasss ? <Formularios /> : ""}
</form>
</div>
</li>
</div>
<div className='cajitabtn'>  
<button className='btn-agregar' onClick={nuevaTarea}>Agregar Referencias</button>
</div>
</>
  );
}

export default Referencias;


//////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useState } from 'react';
import Formularios from './Formularios'

function Referencias(props) {
  const { referencias } = props;
  const [tareasss, setTareasss] = useState();

  function nuevaTarea(){
   const agregarList = document.getElementById('listaaa');
   setTareasss(!tareasss)
   if(!tareasss){
    agregarList.style = "display:block";
   }else{
    agregarList.style = "display:none";
  }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = document. querySelector ("#nomb");
    const empresa = document. querySelector ("#empr");
    const profesion = document. querySelector ("#prof");
    const telefono = document. querySelector ("#tele");
    const nuevaReferencia = [{
      nombre: nombre.value,
      empresa: empresa.value,
      cargo: profesion.value,
      telefono: telefono.value,
    }];
    console.log(nuevaReferencia);
  };

  return (
<>
        {referencias.map((refe, index) => (
       <li key={index} className="referrr">
         <div className='fechasexp2'>
         <small className='negritass'>{refe.nombre} From {refe.empresa}</small>
         <br />
         <small>{refe.cargo} - {refe.telefono}</small>
      </div>
  </li>
))}
<div id="listaaa">
<li className="referrr">
<div className='fechasexp2'>
<form onSubmit={handleSubmit}>
{tareasss ? <Formularios /> : ""}
</form>
</div>
</li>
</div>
<div className='cajitabtn'>  
<button className='btn-agregar' onClick={nuevaTarea}>Agregar Referencias</button>
</div>
</>
  );
}

export default Referencias;


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////chat equivocado////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import Formularios from './Formularios';

function Referencias(props) {
  const { referencias } = props;
  const [referenciaIndex, setReferenciaIndex] = useState(referencias); // Inicializa el estado con las referencias existentes
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const handleSubmit = (nuevaReferencia) => {
    // Agrega la nueva referencia al estado y actualiza la lista de referencias
    setReferenciaIndex([...referenciaIndex, nuevaReferencia]);
    setShowForm(false); // Oculta el formulario después de agregar la referencia
  };

  return (
    <div>
      {/* Muestra las referencias del estado local (referenciaIndex) */}
      {referenciaIndex.map((refe, index) => (
        <li key={index} className="referrr">
          <div className='fechasexp2'>
            <small className='negritass'>{refe.nombre} From {refe.empresa}</small>
            <br />
            <small>{refe.cargo} - {refe.telefono}</small>
          </div>
        </li>
      ))}

      {/* Muestra el formulario solo si showForm es true */}
      {showForm && <Formularios onSubmit={handleSubmit} />}

      {/* Botón para mostrar/ocultar el formulario */}
      <div className='cajitabtn'>  
        <button className='btn-agregar' onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancelar' : 'Agregar Referencia'}
        </button>
      </div>
    </div>
  );
}

export default Referencias;

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// REFERENCIA ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { useState } from 'react';
import Formularios from './Formularios'

function Referencias(props) {
  const { referencias } = props;
  const [tareasss, setTareasss] = useState();
  const [showForm, setShowForm] = useState(false);
  const [referenciaIndex, setReferenciaIndex] = useState(referencias);

  function nuevaTarea(){
   const agregarList = document.getElementById('listaaa');
   setTareasss(!tareasss)
   setShowForm(!showForm)
   if(!tareasss && !showForm){
    agregarList.classList.remove('active');
    agregarList.style = "display:block";
   }else{
    agregarList.style = "display:none";
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = document. querySelector ("#nomb").value;
    const empresa = document. querySelector ("#empr").value;
    const profesion = document. querySelector ("#prof").value;
    const telefono = document. querySelector ("#tele").value;

    if(!nombre){
      alert("Por favor, ingrese un Nombre y Apellidos ❗❗❗");
      return;
    }else if (!empresa){
      alert("Por favor, ingrese una Empresa ❗❗❗");
      return;
    }else if(!profesion){
      alert("Por favor, ingresa una Profesion ❗❗❗");
      return;
    }else if(!telefono){
      alert("Por favor, ingresa un numero de Telefono ❗❗❗");
      return;
    }

    const nuevaReferencia = {
      nombre: nombre,
      empresa: empresa,
      cargo: profesion,
      telefono: telefono,
    }; 

    const agregarReferencia = (nuevaReferencia) => {
      setReferenciaIndex([...referenciaIndex, nuevaReferencia]);
    };
    agregarReferencia(nuevaReferencia); 
    document.getElementById('nomb').value = '';
    document.getElementById('empr').value = '';
    document.getElementById('prof').value = '';
    document.getElementById('tele').value = '';  
    console.log(referenciaIndex);
  };

  return (
<>
        {referenciaIndex.map((refe, index) => (
       <li key={index} className="referrr">
         <div className='fechasexp2'>
         <small className='negritass'>{refe.nombre} From {refe.empresa}</small>
         <br />
         <small>{refe.cargo} - {refe.telefono}</small>
      </div>
  </li>
))}
<div id="listaaa" className="active">
<li className="referrr">
<div className='fechasexp2'>
<form onSubmit={handleSubmit}>
{tareasss ? <Formularios /> : ""}
</form>
</div>
</li>
</div>
<div className='cajitabtn'>  
<button className='btn-agregar' onClick={nuevaTarea}>{showForm ? 'Cancelar' : 'Agregar Referencia'}
</button>
</div>
</>
  );
}

export default Referencias;


////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Referencias ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import Formularios from './Formularios';
import ModoEdicion from './ModoEdicion'

function Referencias(props) {
  const { referencias } = props;
  const [tareasss, setTareasss] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editarItem, setEditarItem] = useState(false);
  const [referenciaIndex, setReferenciaIndex] = useState(referencias);

  useEffect(() => {
    // Recuperar datos del localStorage al cargar el componente
    const storedReferenciaIndex = localStorage.getItem('referenciaIndex');
    if (storedReferenciaIndex) {
      setReferenciaIndex(JSON.parse(storedReferenciaIndex));
    }
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez, similar a componentDidMount


  const guardarReferenciaEnLocalStorage = (referenciaIndex) => {
    // Guardar referenciaIndex en localStorage
    localStorage.setItem('referenciaIndex', JSON.stringify(referenciaIndex));
  };

  const agregarReferencia = (nuevaReferencia) => {
    const newReferenciaIndex = [...referenciaIndex, nuevaReferencia];
    setReferenciaIndex(newReferenciaIndex);
    guardarReferenciaEnLocalStorage(newReferenciaIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = document. querySelector ("#nomb").value;
    const empresa = document. querySelector ("#empr").value;
    const profesion = document. querySelector ("#prof").value;
    const telefono = document. querySelector ("#tele").value;

    if(!nombre){
      alert("Por favor, ingrese un Nombre y Apellidos ❗❗❗");
      return;
    }else if (!empresa){
      alert("Por favor, ingrese una Empresa ❗❗❗");
      return;
    }else if(!profesion){
      alert("Por favor, ingresa una Profesion ❗❗❗");
      return;
    }else if(!telefono){
      alert("Por favor, ingresa un numero de Telefono ❗❗❗");
      return;
    }

    const nuevaReferencia = {
      nombre: nombre,
      empresa: empresa,
      cargo: profesion,
      telefono: telefono,
    };

    agregarReferencia(nuevaReferencia);
    
    document.getElementById('nomb').value = '';
    document.getElementById('empr').value = '';
    document.getElementById('prof').value = '';
    document.getElementById('tele').value = '';  

    console.log(referenciaIndex);
  };

  const modoEdit = () => {
    setEditarItem(!editarItem);
    
  }

  const nuevaTarea = () => {
    const agregarList = document.getElementById('listaaa');
    setTareasss(!tareasss);
    setShowForm(!showForm);

    if (!tareasss && !showForm) {
      agregarList.classList.remove('active');
      agregarList.style = 'display:block';
    } else {
      agregarList.style = 'display:none';
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        {referenciaIndex.map((refe, index) => (
       <li key={index} className="referrr">
         <div className='fechasexp2'>
         <div className='editarItem'>
         <small className='negritass'>{editarItem ? <ModoEdicion /> : '{refe.nombre} From {refe.empresa}'}</small>
         <button className='itemEdit' onClick={modoEdit}>Editar</button>
         </div>
         <small>{editarItem ? <ModoEdicion /> : '{refe.cargo} - {refe.telefono}'}</small>
      </div>
  </li>
))}
</form>
<div id="listaaa" className="active">
<li className="referrr">
<div className='fechasexp2'>
<form onSubmit={handleSubmit}>
{tareasss ? <Formularios /> : ""}
</form>
</div>
</li>
</div>
<div className='cajitabtn'>  
<button className='btn-agregar' onClick={nuevaTarea}>{showForm ? 'Cancelar' : 'Agregar Referencia'}
</button>
</div>
</>
  );
}

export default Referencias;

