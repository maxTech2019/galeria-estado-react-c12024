
import { useState } from 'react';
import { Escultura } from './components/Escultura.jsx';
import { listaEsculturas } from './data/data.js';

const App = () => {
    //variable de estado -->posición de la escultura en el array listaEsculturas
    const [indice, setIndice] = useState(0);

    const escultura = listaEsculturas[indice];
    return(
        <>
            <h1>Lista de Esculturas</h1>
            <hr />
            <button>
                Siguiente
            </button onC>
            <Escultura
                name = {escultura.name}
                artist = {escultura.artist}
                description = {escultura.description}
                url = {escultura.url}
                alt = {escultura.alt}
            />
        </>
    );
}

export default App;