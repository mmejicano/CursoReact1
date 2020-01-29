import React from "react";
import noimage from './NoImage.png';

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  const imagen = urlToImage ? urlToImage : noimage ;
  return (
    <div className="col s12 m6 l4">
      <div className="card medium animated fast fadeInUp">
        <div className="card-image waves-effect waves-block waves-light">
        <img className="activator small" src={imagen} alt={title} />

        </div>

        <div className="card-content">
          <h6>{title}</h6>
          <p>{source.name}</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Descripción
            <i className="material-icons right">close</i>
          </span>
          <p>{description}</p>
        </div>

        <div className="card-action center-align">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn waves-effect waves-light indigo"
          >
            
            Ver noticia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
