import React, { useState, useEffect } from "react";


function ModoEdicion() {

    const [referenciaIndex, setReferenciaIndex] = useState([]);
    const [ejemplo, setEjemplo] = useState(referenciaIndex)//[referenciaIndex]

    const efectoSecundario = () => {
        document.ejemplo = ejemplo
        setEjemplo
    }

    useEffect(() => {
        // Recuperar datos del localStorage al cargar el componente
     const storedReferenciaIndex = localStorage.getItem('referenciaIndex');
        if (storedReferenciaIndex) {
          setReferenciaIndex(JSON.parse(storedReferenciaIndex));
           console.log(ejemplo)
        }
       }, []);

    useEffect(efectoSecundario, [ejemplo])

    return (
  <>
  <input type='text' id="nomb" className='espacio-input' defaultValue={ejemplo.value} />
  From
  <input type='text' id="empr" className='espacio-input2' defaultValue={ejemplo} />
  <br />
  <input type='text' id="prof" className='espacio-input' defaultValue={ejemplo} />
  -
  <input type='text' id="tele" className='espacio-input2' defaultValue={ejemplo} />
  <br />
  <br />
  <div className='cajitabtn'>
  <button className='cajitabtn' type="submit">Guardar</button>
  </div>
  </>
    );
  }
  
  export default ModoEdicion;
  