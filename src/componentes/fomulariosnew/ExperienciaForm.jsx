
function ExperienciaForm() {
    
    return (
<>
<div className="exp">
    <div className='cajasss1'>
      <div className='fechasss'>
        <input type='text' id="fecha1" className='altobajo1' placeholder='Fecha de inicio' />
        <br />
        <input type='text' id="fecha2" className='altobajo2' placeholder='Fecha Fin' />
        <div>
        <small className='negritasskk'>FUNCIONES DE CARGO</small>
        </div>
      </div>
      <div className='fechasexp'>
        <input type='text' id="carg" className='espacio-input-cargo' placeholder='Cargo que Desempeño' />
        -
        <input type='text' id="empresa" className='espacio-input-emresa' placeholder='Empresa donde Trabajo' />
        <br />
        <br />
        <textarea type='text' id="descrip" className='espacio-input-desc' placeholder='Descripcion Breve del Trabajo que Realizo o Funciones que Desempeño' />
        <div className="spaciadoss">
        <p className='cursivane'>Experiencia:</p>
        <input type='text' id="experien" className='espacio-input22' placeholder='Experiencia Obtenida' />
        </div>
      </div>
    </div>
  </div>
  <div className='cajitabtn'>
<button className='cajitabtnExp' type="submit">Guardar</button>
</div>
</>
    )
}

export default ExperienciaForm;