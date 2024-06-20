
import { useState } from 'react';
import '../css/escultura.css';

export const Escultura = (props) =>{
    const [mostrar, setMostrar] = useState(false);
    return (
        <>
            <h2>
                <i>{props.name}</i> de {props.artist}
            </h2>
            <br />
            <button>
                {(mostrar)?'Ocultar':'Mostrar'} Detalle
            </button>
            <br />
            <p name
            >
                {props.description}
            </p>
            <br />
            <img 
                src = {props.url}
                alt = {props.alt}
            />
        </>
    );
}