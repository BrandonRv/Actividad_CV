import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Resumen from './componentes/Resumen';
import Intereses from './componentes/Intereses';
import Datoscontac from './componentes/Datoscontac';
import PerfilProfesional from './componentes/PerfilProfesional';
import ExperienciaLaboral from './componentes/ExperienciaLaboral';
import Educacion from './componentes/Educacion';
import Idiomas from './componentes/Idiomas';
import Referencias from './componentes/Referencias';
import foto from '../hofavida.png'

function App() {

  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);

  const habilidades = [
    'Creatividad',
    'Trabajo en Equipo',
    'Actitud Positiva',
    'Adaptabilidad',
    'Relaciones interpersonales',
    'Proactividad',
  ];

   const intereses = [
     'Desarrollo Web',
     'Automatización ',
     'Microelectrónica',
     'Compartir Conocimientos',
     'Deportes',
   ];

  const idiomas = [
    'Español Nativo',
    'Ingles B1',
  ]

  const perfilProfesional = 
  `Soy un desarrollador web y microelectrónico con experiencia en el frontend y backend. 
  Estoy familiarizado con los lenguajes de programación C, C++, JavaScript y PHP. Además, 
  tengo habilidades sólidas en Next.js, React, Node.js, laravel, Bootstrap, TailwindCSS, Material UI, CSS3 y metodologías ágiles como Scrum. 
  Como microelectrónico, me he destacado en la reparación, mantenimiento y diagnóstico de dispositivos electrónicos, acumulando 7 años de Exp. 
  También poseo un sólido conocimiento en HVAC/R y una especialización técnica en mecatrónica automotriz. 
  Mi enfoque se centra en la resolución eficaz de desafíos técnicos y la aplicación de soluciones eficientes en estas áreas.`;

  const experienciaLaboral = [
    {
      id: 1,
      empresa: 'MAYAGÜEZ S.A.',
      cargo: 'TEC. EN MANTENIMIENTO MECATRÓNICO',
      periodoini: 'Ene. 2023',
      periodofin: 'Jul. 2023',
      descripcion: 'Tec. Encargado en el Mantenimiento Electrico y de Control electronico de Automotores de Maquinaria Agricola y Agricultura de Precisión.',
      experiencia: '7 meses'
    },
    {
      id: 2,
      empresa: 'AUTÓNOMO',
      cargo: 'XOR. CENTRO DE REPARACIONES',
      periodoini: '',
      periodofin:  'Presente.',
      descripcion: 'Reparación de MacBook, Notebook, iPhone, Servicios de recuperación de datos, Soporte de reparación de placa, reparaciones de televisores',
      experiencia: '8 Años.'
    },
  ];
  const educacion = [
    {
      institucion: 'FUNDET (FUNDACIÓN DE DESARROLLO TÉCNICO INDUSTRIAL Y SOCIAL)',
      titulo: 'DESARROLADOR WEB FULL STACK JUNIOR',
      periodoini: 'Sep. 2023',
      periodofin: 'Ene. 2024',
      descripcion: 'Trabajo en equipo · HTML5 · JavaScript · MySQL · PHP · Laravel · React.js · Next.js · Bootstrap · Tailwind CSS · Material-UI · Hojas de estilos en cascada (CSS) · Scrum'
    }, 
    {
      institucion: 'SERVICIO NACIONAL DE APRENDIZAJE (SENA)',
      titulo: 'TEC. MECATRÓNICO',
      periodoini: 'Abr. 2022',
      periodofin: 'Jul. 2023',
      descripcion: 'Mantenimiento de los sistemas eléctricos y electrónicos de vehículos. Realizar Mantenimiento preventivo. Diagnosticar y reparar los sistemas con componentes eléctricos, electrónicos y sistemas de comunicación en los vehículos automotores.'
    }, 
    {
      institucion: 'FUNDET (FUNDACIÓN DE DESARROLLO TÉCNICO INDUSTRIAL Y SOCIAL)',
      titulo: 'TÉCNICO HVAC/R',
      periodoini: 'Jul. 2018',
      periodofin: 'Sep. 2018',
      descripcion: 'Tecnico en Refrigeracion, climatizacion comercial & industrial, aires acondicionados de vehiculos y linea blanca.'
    }, 
    {
      institucion: 'INSTITUTO UNIVERSITARIO POLITÉCNICO ‘‘SANTIAGO MARIÑO’’',
      titulo: 'INGENIERO ELECTRÓNICO',
      periodoini: 'Abr. 2015',
      periodofin: 'Ene. 2017',
      descripcion: 'Diseñar y conducir experimentos, Analizar e interpretar datos. Diseño de sistemas, componentes o proceso para satisfacer las necesidades deseadas. Identificar, formular y resolver problemas de ingeniería. Responsabilidad profesional y ética.'
    }, 
  ];

  const referencias = [
    {
      id: 1,
      nombre: 'Danny Araujo Ojeda',
      empresa: 'MAYAGÜEZ S.A.',
      cargo: 'Supervisor',
      telefono: '3137945949',
    }, 
    {
      id: 2,
      nombre: 'Edwin Bolaños',
      empresa: 'E-COMPUNET',
      cargo: 'Ing Sistemas CEO',
      telefono: '3158876151',
    }, 
  ];

const handleVisible = () => setVisible(!visible);
const handleVisible1 = () => setVisible1(!visible1);
const handleVisible2 = () => setVisible2(!visible2);

  return (
    <div className='cv-wrapper'>
    <div className="cv-container">
      <br></br>
      <img
        src={foto}
        alt="Tu Foto"
        className="cv-photo"
        style={{ width: '200px', height: 'auto' }}
      />
      <Datoscontac />
      <Resumen habilidades={habilidades} />
      <Intereses intereses={intereses} /> 
      <Idiomas idiomas={idiomas} />
    </div>
    <div className='elementosCV'>
      <PerfilProfesional perfil={perfilProfesional} />

      <div className="cv-experiencia-laboral">
      <div className='mosOcul'>
      <h2 className='titulosss'>EXPERIENCIA LABORAL</h2>
      <button className='btnOcul' onClick={handleVisible}>Mostrar/Ocultar</button>
      </div>
      <hr className="color" />
      <br />
      {visible ? <ExperienciaLaboral experiencia={experienciaLaboral} /> : "Ocultado"}
      </div>

      <div className="cv-educacion">
      <div className='mosOcul'>
      <h2 className='titulosss'>EDUCACIÓN</h2>
      <button className='btnOcul' onClick={handleVisible1}>Mostrar/Ocultar</button>
      </div>
      <hr className="color" />
      <br />
      {visible1 ? <Educacion educacion={educacion} /> : "Ocultado"}
      </div>

      <div className="cv-referencias">
      <div className='mosOcul'>
      <h2 className='titulosss'>REFERENCIAS PROFESIONALES</h2>
      <button className='btnOcul' onClick={handleVisible2}>Mostrar/Ocultar</button>
      </div>
      <hr className="color" />
      <br />
      {visible2 ?  <Referencias referencias={referencias} />  : "Ocultado"} 
      </div>
    </div>
  </div>
);
}

export default App;
