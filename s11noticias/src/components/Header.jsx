import React from 'react';

const Header = ({titulo}) => {
    return (
        <nav className="na-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center"
             rel="noopener noreferrer"> {titulo} </a>
            
        </nav>
    );
}

export default Header;
