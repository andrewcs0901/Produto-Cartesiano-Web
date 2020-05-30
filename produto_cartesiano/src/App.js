import React from 'react';
import './App.css';
import Set from './components/Set/Set';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Produto Cartesiano</h1>
      </header>
      <main>
        <h3>Conjuntos</h3>
        <Set name="X"/>
        <Set name="Y"/>
      </main>
    </div>
  );
}

export default App;
