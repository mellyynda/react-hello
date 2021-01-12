import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import PFTest from './PFTest/index.js';
import List from './List';
import { useState } from 'react';

const PEOPLE = [{HWname:'Krille', HWprofession:'Coder Extraordinarie'}];

function App() {
  const [name, setName] = useState('');
  const [HWname, setHWname] = useState('Krille');
  const [profession, setProfession] = useState('');
  const [HWprofession, setHWprofession] = useState('Coder Extraordinarie');

  const addPerson = (name, profession) => {
    PEOPLE.push({name: name, profession: profession, key: name});
    console.log(PEOPLE);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name.trim() === "" && profession.trim() === ""){
      setHWname('Krille');
      setHWprofession('Coder Extraordinarie');
    } else {
      setHWname(name);
      setHWprofession(profession);
      addPerson(name, profession);
    }

    setName('');
    setProfession('');
    
    //PEOPLE.push({HWname:HWname, HWprofession:HWprofession, key:HWname});
    
  }
  console.log(PEOPLE);
  return (
    <div className="App-header">
      {/* <Welcome name="Sara" />; */}
      
      {/* <HelloWorld 
        HWname={HWname} 
        HWprofession={HWprofession} /> */}
      <HelloWorld HWname={HWname} HWprofession={HWprofession} />
      <PFTest 
        name={name} 
        setName={setName} 
        profession={profession} 
        setProfession={setProfession} 
        handleSubmit={handleSubmit} />
      <div>
        
        {
          PEOPLE.map(person => <>
            <List 
            name={person.name} 
            profession={person.profession} />
            </>)
        }
      </div>
      <p className="App">Tjaba!</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
