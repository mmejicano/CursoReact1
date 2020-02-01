import React, { useState } from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    -webkit-appearance: none;
`;

const Radio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #2684da;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #0084aa;
    }
`; 
const Formulario = () => {

    const [datos, guardarDatos] = useState({
        marca: '',
        anio: '',
        plan: ''
    });
    // Extrae valores del state
    const {marca, anio, plan } = datos;

    // Leer datos del formulario y guardarlos en state
    const obtenerInfo = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form>
            <Campo>
            <Label>Marca</Label>
            <Select name="marca" 
                value="marca" 
                onChange={obtenerInfo}
            >
                <option value="">-- Seleccione --</option>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </Select>

            </Campo>
            <Campo>
            <Label>Año</Label>
            <Select name="anio" 
                value="anio" 
                onChange={obtenerInfo}
            >
                <option value="">-- Seleccione --</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </Select>

            </Campo>

            <Campo>
                <Label htmlFor="">Plan</Label>
                <Radio type="radio"
                name="plan"
                value="basico"
                checked={plan === 'basico'}
                onChange={obtenerInfo}
                />Basico

                <Radio type="radio"
                name="plan"
                value="completo"
                checked={plan === 'completo'}
                onChange={obtenerInfo}
                />Completo

            </Campo>
            <Boton type="Boton">Cotizar</Boton>

        </form>
    );
}

export default Formulario;
