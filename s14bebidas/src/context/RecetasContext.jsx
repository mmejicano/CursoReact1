import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();


const RecetasProvider  = (props) => {

    const [recetas, buscarRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    });

    return (
        <RecetasProvider
        
            value={{buscarRecetas}}
        >
            {props.children}
        </RecetasProvider>

    )
}

export default RecetasProvider;