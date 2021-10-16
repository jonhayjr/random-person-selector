 import {useState} from 'react';

 /*Import Material UI components*/
 import Alert from '@mui/material/Alert';

/*Import CSS*/
import './UserInput.css';

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
            <Alert severity="error">This field cannot be blank!</Alert>
            : ''
            }
            <textarea className='form__textbox' onChange={handleChange} value={inputValue}></textarea>
            <button className='btn'>Get Random Person</button>
        </form>
    )
}

export default UserInput
