import React from 'react';
import Pregunta from './components/Pregunta';


function App() {
  return (
    <div className="container">
      <header>
      <h1>Gasto Semanal</h1>

      </header>
      <div className="contenido-principal contenido">
      <Pregunta/>

      </div>
    </div>
  );
}

export default App;
