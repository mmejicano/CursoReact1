import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from 'prop-types';


const Formulario = ({ crearCita }) => {
  // state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  // state de errores
  const [error, updatError] = useState(false);

  // actualizar state
  const updateState = e => {
    // console.log(e.target.name, e.target.value);
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  // extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // enviar cita
  const submitCita = e => {
    e.preventDefault();
    // console.log('enviando..');

    // 1. Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      // console.log('Hay un error');
      updatError(true);
      return;
    }

    // 2. Asignar ID
    cita.id = uuid();
    // console.log(cita);
    updatError(false);

    // 3. Crear cita
    crearCita(cita);

    // 4. reset form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <Fragment>
      

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={updateState}
          value={mascota}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={updateState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={updateState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={updateState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={updateState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;
