import React, {useState}  from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, setError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();

        //validar
        if(termino.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        guardarBusqueda(termino);
        //enviar el termino de busqueda hacia APP component

    }


    return (
        <form 
        onSubmit={buscarImagen}>
            <div className="row">
                <div className="form-group col-md-8">

                    <input type="text"
                        className="form-control form-control-lg animated fadeInLeft"
                        placeholder="Busca una imagen"
                        onChange={ e=> guardarTermino(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">

                    <input type="submit"
                        className="btn btn-lg btn-danger btn-block animated fadeInRight"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Agregue un termino de busqueda"/> : null}
        </form>
    );
}

export default Formulario;
