
import { useState } from 'react';
import { Escultura } from './components/Escultura.jsx';
import { listaEsculturas } from './data/data.js';

const App = () => {
    //variable de estado -->posición de la escultura en el array listaEsculturas
    const [indice, setIndice] = useState(second);
    
    const escultura = listaEsculturas[1];
    return(
        <>
            <h1>Lista de Esculturas</h1>
            <hr />
            <button>Siguiente</button>
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