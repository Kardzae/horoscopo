import './styles/SelectGeneros.css';

function SelectGeneros(){
    return (
        <div className='SelectGeneros'>
            <h4 id='texto-seleccion-generos'>Seleccione su género</h4>
            <select id="generos">
                <option value="0">Seleccione un género</option>
                <option value="Hombre">Hombre</option>
                <option value="Sagitario">Mujer</option>
            </select>
        </div>
    )
}

export default SelectGeneros;