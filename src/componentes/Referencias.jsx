import React, { useState, useEffect } from 'react';
import Formularios from './fomulariosnew/Formularios';
import ModoEdicion from './allEdiciones/ModoEdicion'

function Referencias(props) {
  const { referencias } = props;
  const [tareasss, setTareasss] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editarItem, setEditarItem] = useState(false);
  const [referenciaIndex, setReferenciaIndex] = useState(referencias);

  useEffect(() => {
    const storedReferenciaIndex = localStorage.getItem('referenciaIndex');
    if (storedReferenciaIndex) {
      setReferenciaIndex(JSON.parse(storedReferenciaIndex));
    }
  }, []); 


  const guardarReferenciaEnLocalStorage = (referenciaIndex) => {
    localStorage.setItem('referenciaIndex', JSON.stringify(referenciaIndex));
  };

  const agregarReferencia = (nuevaReferencia) => {
    const lastId = parseInt(localStorage.getItem('lastId')) || 2;
    nuevaReferencia.id = lastId + 1;
    const newReferenciaIndex = [...referenciaIndex, nuevaReferencia];
    setReferenciaIndex(newReferenciaIndex);
    guardarReferenciaEnLocalStorage(newReferenciaIndex);
    localStorage.setItem('lastId', nuevaReferencia.id); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = document. querySelector ("#nomb").value;
    const empresa = document. querySelector ("#empr").value;
    const profesion = document. querySelector ("#prof").value;
    const telefono = document. querySelector ("#tele").value;
   
    const lastId = localStorage.getItem('lastId') || 2;
    

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
      id: parseInt(lastId) + 1,
      nombre: nombre,
      empresa: empresa,
      cargo: profesion,
      telefono: telefono,
    };
    localStorage.setItem('lastId', lastId)
    agregarReferencia(nuevaReferencia);
    document.getElementById('nomb').value = '';
    document.getElementById('empr').value = '';
    document.getElementById('prof').value = '';
    document.getElementById('tele').value = '';   

  };

  const handleSubmitEdicion = (e) => {
    e.preventDefault();
  }

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
    <form onSubmit={handleSubmitEdicion}>
        {referenciaIndex.map((refe, index) => (
       <li key={index} className="referrr">
         <div className='fechasexp2'>
         <div className='editarItem'>
         <small className='negritass'>{refe.nombre} From {refe.empresa}</small>  
         {/* {editarItem ? <ModoEdicion /> : ''}  */}
         <button className='itemEdit' onClick={modoEdit}>{showForm ? 'Guardar' : 'Editar'}</button>
         </div>
         <small>{refe.cargo} - {refe.telefono}</small>
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
