import React from 'react';
import './App.css';
import Set from './components/Set/Set';
import Expression from './components/Expression/Expression';
import UseLocalStorage from './utils/UseLocalStorage';
import API from './logic/API';
import MainStyle from './MainStyle';


const key = 'produtoCartesiano';

const App = () => {

  const [sets, updateSet] =  UseLocalStorage( {set:[]}, key);
  
  const updatesSet = (newSet) => {
    updateSet({ ...sets, set: newSet });
  }

  const callAPI = (expression) => {
    return API(expression, sets.set)
  }

  return (
    <MainStyle className="App">
      <header>
        <h1>Produto Cartesiano</h1>
      </header>
      <main>
        <h3>Conjuntos</h3>
        <Set action={updatesSet} sets={sets.set}/>
        <Expression options={sets.set?.filter(set => set.values.length).map(set => set.name)} calculate={callAPI} />
        
      </main>
    </MainStyle>
  );
}

export default App;
