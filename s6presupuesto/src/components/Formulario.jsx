import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Error from './Error';
import shortid from 'shortid';


const Formulario = ({guardarGasto, guardarCreargasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);



    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() === ''){
            setError(true);
            return;
        }


        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }


        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCreargasto(true);

        // resetear el form
        setNombre('');
        setCantidad(0);
    }
    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            { error ? <Error mensaje="Campos obligatorios o gasto invalido"/> :null}

            <div className="campo">
                <label className="text-white">Nombre Gasto</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label className="text-white">Cantidad Gasto</label>
                <input type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={ e => setCantidad( parseInt(e.target.value,10))}
                />
            </div>

            <input type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCreargasto: PropTypes.func.isRequired
}
export default Formulario;
