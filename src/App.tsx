import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import H1 from './H1';
import ButtonSubmit from './ButtonSubmit';
import ButtonSave from './ButtonSave';
import Form from './Form';

// const response = await fetch('https://ice-cream.com/vanilla/recipes.html') 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <H1 title={response}/> */}
        <H1 title='Jello World!'/>
        <Button />
        <ButtonSubmit />
        <ButtonSave />
        <Form />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       </a>
      </header>
    </div>
  );
}

export default App;
