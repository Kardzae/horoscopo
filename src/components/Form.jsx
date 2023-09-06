import Select from './Select';
import ButtonConsultar from './ButtonConsultar'; 
import SelectGeneros from './SelectGeneros';
import './styles/Form.css'

function Form(){
    return (
        <form>  
            <Select></Select>
            <SelectGeneros></SelectGeneros>
            <ButtonConsultar></ButtonConsultar>
        </form>
    )
}

export default Form;