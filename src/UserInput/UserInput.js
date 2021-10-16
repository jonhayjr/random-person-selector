 import {useState} from 'react';
/*Import CSS*/
import './UserInput.css';

/*Import Components*/
import Button from '../Button/Button';

const UserInput = ({onChange, inputValue, onSubmit}) => {

    const [validationError, setValidationError] = useState(false);

    const handleChange = (e) => {
        onChange(e.target.value);
    }

    const handleSubmit = (e) => {
        /*Prevent default form behavior*/
        e.preventDefault();

        /*If input doesn't contain value, throw validation error.  If it does contain value, run handle submit*/
        if (!inputValue) {
            /*Set Validation Error to true*/
            setValidationError(true);
        } else {
            /*Set Validation Error to False*/
            setValidationError(false);
            /*Trigger onSubmit function*/
            onSubmit(inputValue);
        }

    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className='form__label'>Please input a list of people below and click the button to select a random person.</label>
            {
            validationError
            ?
            <p className='validation-error'>This field cannot be blank!</p>
            : ''
            }
            <textarea className='form__textbox' onChange={handleChange} value={inputValue}></textarea>
            <Button class='btn btn-primary' text='Get Random Person'/>
        </form>
    )
}

export default UserInput
