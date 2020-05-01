import React from 'react';

const Imagen = ({imagen}) => {

    const {urls, tags, likes} = imagen

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={urls.thumb} alt={tags} className='card-img-top'/>
            </div>
        </div>
    );
};

export default Imagen;