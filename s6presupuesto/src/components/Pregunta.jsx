import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {


    // Definir el state local
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion que lee y guarda el presupuesto
    const definirPresupuesto = e => {
        setCantidad( parseInt(e.target.value, 10) )
    }

    const addPresupuesto = e => {
        e.preventDefault();

        // VALIDACION
        if(cantidad < 1 || isNaN(cantidad) ){
            setError(true);
            return;
        }
        setError(false);

        // SI PASA VALIDACION
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error
                mensaje="Presupuesto invalido"
            /> :null}
            <form onSubmit={addPresupuesto}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;
