import './styles/Select.css';

function Select(){
    return (
        <div className='SelectBox'>
            <h1 id='titulo-principal'>Bienvenido a nuestro portal del Zodiaco</h1>
            <h4 id='texto-seleccion'>Seleccione su signo zodiacal</h4>
            <select id="signos">
                <option value="0">Seleccione su signo</option>
                <option value="Leo">Leo</option>
                <option value="Sagitario">Sagitario</option>
                <option value="Capricornio">Capricornio</option>
                <option value="Libra">Libra</option>
                <option value="Cancer">Cancer</option>
                <option value="Aries">Aries</option>
                <option value="Geminis">Géminis</option>
                <option value="Virgo">Virgo</option>
                <option value="Escorpio">Escorpio</option>
                <option value="Acuario">Acuario</option>
                <option value="Piscis">Piscis</option>
                <option value="Tauro">Tauro</option>
            </select>
        </div>
        
    )
}

export default Select;