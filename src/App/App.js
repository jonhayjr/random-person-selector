import {useState} from 'react';

/*Import CSS*/
import './App.css';

/*Import Components*/
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [randomPerson, setRandomPerson] = useState('');
  const [usedPeople, setUsedPeople] = useState([]);

  const onChange = (e) => {
    /*Add input value to state*/
    setInputValue(e);
  }

  const randomPersonGenerator = (arr) => {
      /*Get usedPeople array value*/
      let usedPersons = usedPeople;

      /*If usedPerson array contains all names, reset it.*/
      if (usedPersons.length === arr.length) {
          usedPersons = [];
      }
      
      /*Get random number based on array of names length*/
      let randomNumber = Math.floor(Math.random() * arr.length);

      /*Get random person using random number as index*/
      let randomPerson = arr[randomNumber];
      
      /*If random person has already been selected, than get new random person*/
      while (usedPersons.indexOf(randomPerson) >= 0) {
          randomNumber = Math.floor(Math.random() * arr.length);
          randomPerson = arr[randomNumber];
      }
      
      /*Push random person to usedPersons array*/
      usedPersons.push(randomPerson);

      return [randomPerson, usedPersons];
  }
  
  



  const onSubmit = (e) => {
     /*Create array of values and split by newline character*/
     const arr = e.replace(/,/g, '').split(/\n/);

    /*Get random person and used persons*/
    const [person, usedPersons] = randomPersonGenerator(arr);

    /*Set randomPerson in state*/
    setRandomPerson(person);

    /*Set userPeople array*/
    setUsedPeople(usedPersons)

  }

  return (
    <div>
      <Header/>
      <Main onChange={onChange} inputValue={inputValue} onSubmit={onSubmit} randomPerson={randomPerson}/>
      <Footer/>
    </div>
  )
}

export default App
