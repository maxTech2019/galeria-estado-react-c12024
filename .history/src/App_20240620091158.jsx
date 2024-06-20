
import { useState } from 'react';
import { Escultura } from './components/Escultura.jsx';
import { listaEsculturas } from './data/data.js';

const App = () => {
    //variable de estado -->posición de la escultura en el array listaEsculturas
    const [indice, setIndice] = useState(0);

    const handleSiguiente = () => {
        if (indice < listaEsculturas.length -1)
            setIndice(indice + 1);
        else
            setIndice(0);
    }

    const escultura = listaEsculturas[indice];
    return(
        <>
            <h1>Lista de Esculturas</h1>
            <hr />
            <button onClick={handleSiguiente}>
                Siguiente
            </button>
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