import React from 'react';
import style from './ContenedorImagen.module.css'

const Imagen = ({imagen}) => {

    const {urls, tags} = imagen

    return (
        <div className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-4`}>
            <div className="card">
                <img src={urls.thumb} alt={tags} className={`${style.tamanio} card-img-top`}/>
                <div className="card-footer">
                    <a
                        href={urls.full}
                        target='_blank'
                        rel='noreferrer noopener'
                        className='btn btn-primary btn-block'
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
};

export default Imagen;