import React, { useState } from 'react';
import './App.css';
import Set from './components/Set/Set';
import Expression from './components/Expression/Expression';

const App = () => {

  const [sets, updateSet] = useState({});

  const updatesSet = (nameSet, collection) => {
    updateSet({...sets, [nameSet]: collection})
  }

  return (
    <div className="App">
      <header>
        <h1>Produto Cartesiano</h1>
      </header>
      <main>
        <h3>Conjuntos</h3>
        <Set name="X" action={updatesSet}/>
        <Set name="Y"action={updatesSet}/>
        <Expression options={Object.keys(sets).filter(name => sets[name].length)}/>
      </main>
    </div>
  );
}

export default App;
