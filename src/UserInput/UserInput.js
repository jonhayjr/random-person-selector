import './UserInput.css';

/*Import Components*/
import Button from '../Button/Button';

const UserInput = () => {
    return (
        <form className='form'>
            <label className='form__label'>Please input a list of people below:</label>
            <textarea className='form__textbox'></textarea>
            <Button class='btn btn-primary' text='Submit'/>
        </form>
    )
}

export default UserInput
