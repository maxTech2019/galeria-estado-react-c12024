
import { useState } from 'react';
import '../css/escultura.css';

export const Escultura = (props) =>{
    const [mostrar, setMostrar] = useState(true);
    return (
        <>
            <h2>
                <i>{props.name}</i> de {props.artist}
            </h2>
            <br />
            <button onClick={}>
                {(mostrar)?'Ocultar':'Mostrar'} Detalle
            </button>
            <br />
            {(mostrar) && <p className='miParrafo'>
                {props.description}
                </p>
            }
            
            <br />
            <img 
                src = {props.url}
                alt = {props.alt}
            />
        </>
    );
}