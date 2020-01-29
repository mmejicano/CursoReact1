import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'science', label: 'Ciencia'},
        {value: 'technology', label: 'Tecnologia'},
        {value: 'health', label: 'Salud'},
        {value: 'sports', label: 'Deportes'},
    ];

    // Utiliza custom hook: con state inicial y opciones

    const[categoria, SelectNoticias] = useSelect('technology', OPCIONES);

    // submit al formulario

    const buscarCategoria = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}> 
            <div className="col s12 m8 offset-m2">


                <form onSubmit={buscarCategoria}>
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    
                    <SelectNoticias/>
                    
                    <div className="input-field col s12">
                        <input type="submit"
                            className={`${styles.btn_block} btn-large blue`} 
                            value="Buscar"
                        />
                    </div>
                </form>


            </div>
        </div>
    );
}

export default Formulario;

// Modulos cSS: nombrar module.css + importar como styles + usar con style.clase 
// utilizar {} + template string y usar _ en lugar de -
