import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaImg from "./components/ListaImg";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalpaginas, setTotalpaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;

      const ImagenPorPage = 30;
      const key = "15064872-78a1ae8de5b15bf5160a21280";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${ImagenPorPage}&page=${pagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      //console.log(resultado.hits);
      guardarImagenes(resultado.hits);
      //console.log(resultado.totalHits/30);
      // Math.cel/floor

      // calcular el total de paginas
      const calcularTotal = Math.ceil(resultado.totalHits / ImagenPorPage);
      setTotalpaginas(calcularTotal);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };

    consultarApi();
  }, [busqueda, pagina]);

  const pageAnterior = () => {
    const nuevaPagina = pagina - 1;

    if (nuevaPagina === 0) return;
    setPagina(nuevaPagina);
  };

  const pageSiguiente = () => {
    const nuevaPagina = pagina + 1;

    if (nuevaPagina > totalpaginas) return;
    setPagina(nuevaPagina);
  };

  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>

      <div className="row justify-content-center pb-4">
        <ListaImg imagenes={imagenes} />

        {pagina === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={pageAnterior}
          >
            &laquo; Anterior
          </button>
        )}

        <span className="text-muted">Pagina {pagina}</span>

        {pagina === totalpaginas ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={pageSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
