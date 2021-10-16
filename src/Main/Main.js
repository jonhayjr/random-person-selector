import './Main.css';

/*Import Components*/
import UserInput from '../UserInput/UserInput';

const Main = ({onChange, inputValue, onSubmit}) => {
    return (
        <main className='main'>
            <UserInput onChange={onChange} inputValue={inputValue} onSubmit={onSubmit}/>
        </main>
    )
}

export default Main
