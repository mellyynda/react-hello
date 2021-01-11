import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import InputTest from './InputTest/index.js';


function App() {
  console.log("Hello from App")
  return (
    <div className="App-header">
      {/* <Welcome name="Sara" />; */}
      
      <HelloWorld name="Krille" profession="Coder Extraordinarie" />
      <InputTest />
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
