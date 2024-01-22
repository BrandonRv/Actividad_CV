import { useState } from "react";
function Datoscontac(){
const [email, setEmail] = useState('BaanduRv@gmail.com');
const [telefono, setTelefono] = useState('+57 304-3132419');
const [nacimiento, setNacimiento] = useState('25 / Jul / 1994');
const [permiso, setPermiso] = useState('C2');
const [direccion, setDireccion] = useState('Palmira Dpto. Valle del Cauca');

return(
<div className="cv-contact">
<h2>PERFIL</h2>
<hr className='color'></hr>
<div className="info">
<small className="negritass">DIRECCIÓN:</small><p className="baseee">{direccion}</p>
<small className="negritass">EMAIL:</small><p className="baseee">{email}</p>
<small className="negritass">TELÉFONO:</small><p className="baseee">{telefono}</p>
<small className="negritass">FECHA DE NACIMIENTO:</small><p className="baseee">{nacimiento}</p>
<small className="negritass">PERMISO:</small><p className="baseee">{permiso}</p>
</div>
</div>
);
};

export default Datoscontac