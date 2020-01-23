import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';
import Citas from './componentes/Citas';


function App() {


  // citas iniciales en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

    // ******** arreglo de citas *******
    const [citas, guardarCitas] = useState(citasIniciales);


  // ****** UseEffect: realiza operaciones automaticas cuando cambia state
    useEffect(() => {
      // localStorage.setItem
      console.log('Algo cambio en el state: citas');

      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas))
      } else {
        localStorage.setItem('citas', JSON.stringify([]));
      }
      
    }, [citas, citasIniciales]);



  // ****** añadir citas nuevas ******
  const crearCita = cita => {
    // console.log(cita);
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // **** Eliminar cita por id*******
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas);
    // console.log(id);
  }



  // **** Mensaje condicional *****
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment> 
      <h1>Administrador de citas</h1>
      
    <div className="container">
      <div className="row">
        <div className="one-half column">
        <h2>Crear cita</h2>
      <hr/>
          <Formulario
            crearCita={crearCita}
          />

        </div>

        <div className="one-half column">
          <h2>{titulo}</h2>
          <hr/>
          {citas.map(cita => (
            <Citas
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>

    </div>
    </Fragment>
  );
}

export default App;
