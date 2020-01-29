import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=8b355a60aafb4dd5a4e2696dc96585e1`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);

    }
    consultarApi();
    
  }, [categoria]);

  return (
    <div className="App">
      <Fragment>
        <Header
        titulo="Buscador de noticias"
        />

        <div className="container  grey lighten-2">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <ListaNoticias
            noticias={noticias}
          />

        </div>
      </Fragment>
    </div>
  );
}

export default App;
