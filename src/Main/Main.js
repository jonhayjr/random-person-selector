import './Main.css';

/*Import Components*/
import UserInput from '../UserInput/UserInput';

const Main = ({onChange, inputValue, onSubmit, randomPerson}) => {
    return (
        <main className='main'>
            <UserInput onChange={onChange} inputValue={inputValue} onSubmit={onSubmit}/>
            {
            randomPerson
            ?
            <p className='random-user'><span className='bold'>{randomPerson}</span> has been selected.</p>
            : ''
            }
        </main>
    )
}

export default Main
