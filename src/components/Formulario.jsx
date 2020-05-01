import React, {useState} from 'react';
import Error from "./Error";

const Formulario = ({guardarBusqueda}) => {

    //Crear state
    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    //Cuando el usuario busque una imagen
    const buscarImagenes = e => {
        e.preventDefault()

        //Validar formulario
        if (termino.trim() === '') {
            guardarError(true);
            return;
        }

        //Enviar busqueda al componente principal
        guardarError(false);
        guardarBusqueda(termino);


    }


    return (
        <form onSubmit={buscarImagenes}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className='form-control form-control-lg'
                        placeholder='Busca una imagen'
                        onChange={e => guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className='btn btn-lg btn-danger btn-block'
                        value={'Buscar'}
                    />
                </div>
            </div>
            {error ? <Error mensaje={'Agrega un término de búsqueda'}/> : null}
        </form>
    );
};

export default Formulario;