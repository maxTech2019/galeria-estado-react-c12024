
import '../css';
export const Escultura = (props) =>{
    return (
        <>
            <h2>
                <i>{props.name}</i> de {props.artist}
            </h2>
            <br />
            <span>
                {props.description}
            </span>
            <br />
            <img 
                src = {props.url}
                alt = {props.alt}
            />
        </>
    );
}