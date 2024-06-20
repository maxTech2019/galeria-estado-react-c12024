
import { Escultura } from './components/Escultura.jsx';
import { listaEsculturas } from './data/data.js';

const App = () => {
    const escultura = listaEsculturas[0];
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