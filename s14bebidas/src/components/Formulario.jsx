import React, {useContext, useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const {categorias} = useContext( CategoriasContext );
    const { buscarRecetas, setConsultar } = useContext( RecetasContext );
    // console.log(categorias);

    // Guardar datos del formulario
    const obtenerDatosForm = (e) => {

        e.preventDefault();

        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form 
            className="col-12"
            onSubmit={ e=> {
                e.preventDefault();
                buscarRecetas(busqueda);
                setConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Busca por ingrediente"
                        onChange={obtenerDatosForm}
                    />
                </div>

                <div className="col-md-4">
                    <select name="categoria"
                        className="form-control"
                        onChange={obtenerDatosForm}
                    >
                        <option value="">-- Selecione categoria --</option>

                        {categorias.map(categoria => (
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            
                            > {categoria.strCategory} </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar"
                    />
                </div>

            </div>
        </form>
    );
}

export default Formulario;
