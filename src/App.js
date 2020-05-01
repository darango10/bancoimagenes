import React, {useEffect, useState} from 'react';
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";


function App() {

    const [busqueda, guardarBusqueda] = useState('');
    const [imagenes, guardarImagenes] = useState([]);

    useEffect(() => {
        if (busqueda === '') return;

        const consultarAPI = async () => {
            const imagenesPorPagina = 30;
            const key = 'DwqDGxtVsNcf71X-KjEo_n61jtt1yeXZ92UEdRv1iOQ'
            const url = `https://api.unsplash.com/search/photos?page=1&per_page=${imagenesPorPagina}&query=${busqueda}&client_id=${key}`

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            guardarImagenes(resultado.results)
        }

        consultarAPI();


    }, [busqueda])

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
            </div>

        </div>
    );
}

export default App;
