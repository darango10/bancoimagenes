import React, {useEffect, useState} from 'react';
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";


function App() {

    const [busqueda, guardarBusqueda] = useState('');
    const [imagenes, guardarImagenes] = useState([]);
    const [paginaActual, guardarPaginaActual] = useState(1);
    const [totalPaginas, guardarTotalPaginas] = useState(1)

    useEffect(() => {
        if (busqueda === '') return;

        const consultarAPI = async () => {
            const imagenesPorPagina = 30;
            const key = 'DwqDGxtVsNcf71X-KjEo_n61jtt1yeXZ92UEdRv1iOQ'
            const url = `https://api.unsplash.com/search/photos?page=${paginaActual}&per_page=${imagenesPorPagina}&query=${busqueda}&client_id=${key}`

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            guardarImagenes(resultado.results)
            guardarTotalPaginas(resultado.total_pages);

            //Mover la pantalla hacia arriba
            const jumbotron = document.querySelector('.jumbotron')
            jumbotron.scrollIntoView({behavior:'smooth'})
        }

        consultarAPI();


    }, [busqueda, paginaActual])

    //Actualizar Pagina
    const paginaAnterior = () => {
        if (paginaActual !== 1) {
            const nuevaPaginaActual = paginaActual - 1
            guardarPaginaActual(nuevaPaginaActual)
            console.log(nuevaPaginaActual)
        }
    }

    const paginaSiguiente = () => {
        if (paginaActual !== totalPaginas) {
            const nuevaPaginaActual = paginaActual + 1
            guardarPaginaActual(nuevaPaginaActual)
            console.log(nuevaPaginaActual)
        }
    }




    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Formulario
                    guardarBusqueda={guardarBusqueda}
                />
            </div>
            <div className="row justify-content-center">
                <ListadoImagenes imagenes={imagenes}/>
                {(paginaActual === 1) ? null
                    :
                    <button
                        type='button'
                        className='btn btn-info mr-1'
                        onClick={paginaAnterior}
                    >&laquo; Anterior
                    </button>


                }
                {(paginaActual === totalPaginas) ? null
                    :

                    <button
                        type='button'
                        className='btn btn-info ml-1'
                        onClick={paginaSiguiente}
                    >Siguiente &raquo;
                    </button>

                }

            </div>

        </div>
    );
}

export default App;
