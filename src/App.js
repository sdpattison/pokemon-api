import React, { useState } from 'react';
import './App.css';
import PokeResponse from './components/Poke';

function App() {
  const [names, setNames] = useState([]);
  
  return (
    <div className="App">
      <PokeResponse names={names} setNames={setNames} />
    </div>
  );
}

export default App;
