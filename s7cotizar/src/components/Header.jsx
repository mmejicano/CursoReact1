import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #00849F;
    color: white;
    font-weight: bold;
    padding: 10px;
    margin-top: 20px;
 `;

 const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    text-align: center;
 `
const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

export default Header;
