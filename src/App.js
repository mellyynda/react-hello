import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import PFTest from './PFTest/index.js';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [HWname, setHWname] = useState('Krille');
  const [profession, setProfession] = useState('');
  const [HWprofession, setHWprofession] = useState('Coder Extraordinarie');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Name posted: "${name}"`)
    console.log("Submit button pressed: " + name + " " + profession)
    setHWname(name);
    setHWprofession(profession);
    setName('');
    setProfession('');
    }

  console.log("Hello from App")
  return (
    <div className="App-header">
      {/* <Welcome name="Sara" />; */}
      
      <HelloWorld HWname={HWname} HWprofession={HWprofession} />
      <PFTest name={name} setName={setName} profession={profession} setProfession={setProfession} handleSubmit={handleSubmit} />
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
