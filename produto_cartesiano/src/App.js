import React, { useState } from 'react';
import './App.css';
import Set from './components/Set/Set';
import Expression from './components/Expression/Expression';

const App = () => {

  const [sets, updateSet] = useState({
    set: []
  });

  const updatesSet = (newSets) => {
    updateSet({ ...sets, set: newSets });
  }

  return (
    <div className="App">
      <header>
        <h1>Produto Cartesiano</h1>
      </header>
      <main>
        <h3>Conjuntos</h3>
        <Set action={updatesSet} />
        <Expression options={sets.set.filter(set => set.values.length).map(set => set.name)} />
      </main>
    </div>
  );
}

export default App;
