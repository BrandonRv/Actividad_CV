import React, { useState, useEffect } from 'react';
import ExperienciaForm from './fomulariosnew/ExperienciaForm'

function ExperienciaLaboral(props) {
  const { experiencia } = props;
  const [tareasss, setTareasss] = useState(false);
  const [showForm, setShowForm] = useState(false);
 // const [editarItem, setEditarItem] = useState(false);
  const [experienciaIndex, setExperienciaIndex] = useState(experiencia);

  useEffect(() => {
    const storedExperienciaIndex = localStorage.getItem('experienciaIndex');
    if (storedExperienciaIndex) {
      setExperienciaIndex(JSON.parse(storedExperienciaIndex));
    }
  }, []); 


  const guardarExperienciaEnLocalStorage = (experienciaIndex) => {
    localStorage.setItem('experienciaIndex', JSON.stringify(experienciaIndex));
  };

  const agregarExperiencia = (nuevaExperiencia) => {
    const lastId1 = parseInt(localStorage.getItem('lastId1')) || 2;
    nuevaExperiencia.id = lastId1 + 1;
    const newExperienciaIndex = [...experienciaIndex, nuevaExperiencia];
    setExperienciaIndex(newExperienciaIndex);
    guardarExperienciaEnLocalStorage(newExperienciaIndex);
    localStorage.setItem('lastId1', nuevaExperiencia.id); 
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const periodoini = document. querySelector ("#fecha1").value;
    const periodofin = document. querySelector ("#fecha2").value;
    const cargo = document. querySelector ("#carg").value;
    const empresa = document. querySelector ("#empresa").value;
    const descripcion = document. querySelector ("#descrip").value;
    const experienciaaa = document. querySelector ("#experien").value;
   
    const lastId1 = localStorage.getItem('lastId1') || 2;
    

    if(!periodoini){
      alert("Por favor, ingresa la fecha en la que Inicio el Contrato ❗❗❗");
      return;
    }else if (!periodofin){
      alert("Por favor, ingresa la fecha en que Finalizo el Contrato ❗❗❗");
      return;
    }else if(!cargo){
      alert("Por favor, ingresa el Cargo que Tuvo❗❗❗");
      return;
    }else if(!empresa){
      alert("Por favor, ingresa la Empresa donde Laboro ❗❗❗");
      return;
    }else if(!descripcion){
      alert("Por favor, ingresa la Descripción Cargo ❗❗❗");
      return;
    }else if(!experienciaaa){
      alert("Por favor, ingresa tu Experiencia ❗❗❗");
      return;
    }

    const nuevaExperiencia = {
      id: parseInt(lastId1) + 1,
      empresa: empresa,
      cargo: cargo,
      periodoini: periodoini,
      periodofin: periodofin,
      descripcion: descripcion,
      experiencia: experienciaaa,
    };

    localStorage.setItem('lastId1', lastId1)
    agregarExperiencia(nuevaExperiencia);
    document.getElementById('fecha1').value = '';
    document.getElementById('fecha2').value = '';
    document.getElementById('carg').value = '';
    document.getElementById('empresa').value = '';   
    document.getElementById('descrip').value = '';
    document.getElementById('experien').value = '';   
  };

  const nuevaTarea = () => {
    //const agregarList = document.getElementById('listaaa');
    setTareasss(!tareasss);
    setShowForm(!showForm);

  //   if (!tareasss && !showForm) {
  //     agregarList.classList.remove('active');
  //     agregarList.style = 'display:block';
  //   } else {
  //     agregarList.style = 'display:none';
  //   }
};

  return (
    <>
{experienciaIndex.map((exp, index) => (
  <div key={index} className="exp">
    <div className='cajasss'>
      <div className='fechasss'>
        <p className='altobajo'>{exp.periodoini}</p>
        <p className='altobajo'>{exp.periodofin}</p>
        <div>
        <small className='negritasskk'>FUNCIONES DE CARGO</small>
        </div>
      </div>
      <div className='fechasexp'>
        <small className='negritass'>{exp.cargo} - {exp.empresa}</small>
        <p>{exp.descripcion}</p>
        <p className='cursivane'>Experiencia: {exp.experiencia}</p>
      </div>
    </div>
  </div>
))}
<form onSubmit={handleSubmit1}>
{tareasss ? <ExperienciaForm /> : ""}
</form>
<div className='cajitabtn'>  
<button className='btn-agregar' onClick={nuevaTarea}>{showForm ? 'Cancelar' : 'Agregar Experiencia'}</button>
</div>
    </>
  );
}

export default ExperienciaLaboral;
