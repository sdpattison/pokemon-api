import React, { useState } from 'react';
import './App.css';
import PokeResponse from './components/Poke';

function App() {
  const [names, setNames] = useState([]);
  const [ isSubmitted , setIsSubmitted] = useState(false);  

  return (
    <div className="App">
      <PokeResponse names={names} setNames={setNames} isSubmitted = {isSubmitted} setIsSubmitted = {setIsSubmitted} />
    </div>
  );
}

export default App;
