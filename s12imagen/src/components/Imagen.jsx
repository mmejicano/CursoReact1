import React from 'react';

const Imagen = ({imagen}) => {

    const {largeImageURL, likes, previewURL, tags, views} = imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card mb-3 p-2 animated bounceIn">
                <img className="card-img-top" src={previewURL} alt={tags}/>

                <div className="card-body">
                    <p className="card-text"> <i class="fas fa-thumbs-up"></i> {likes} Me gusta </p>
                    <p className="card-text"> <i class="fas fa-eye"></i> {views} Vistas </p>

                </div>
                    <a href={largeImageURL}
                    target="_blank"
                    className="btn btn-primary btn-block"
                    rel="noopener noreferrer"
                    >Ver Imagen</a>

            </div>
        </div>
    );
}

export default Imagen;
