import {useState} from 'react';

/*Import CSS*/
import './App.css';

/*Import Components*/
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [people, setPeople] = useState([]);

  const onChange = (e) => {
    setInputValue(e);
  }

  const onSubmit = (e) => {
    /*Create array of values and split by newline character*/
    const arr = e.split(/\n/);
    
    /*Add Array to state*/
    setPeople(arr);
  }

  return (
    <div>
      <Header/>
      <Main onChange={onChange} inputValue={inputValue} onSubmit={onSubmit}/>
    </div>
  )
}

export default App
