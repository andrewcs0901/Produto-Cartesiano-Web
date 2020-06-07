import React, { useState } from 'react';
import './App.css';
import Set from './components/Set/Set';
import Expression from './components/Expression/Expression';
import axios from 'axios';
const urlAPI = 'https://produto-cartesiano.herokuapp.com/calculate/'

const App = () => {

  const [sets, updateSet] = useState({
    set: JSON.parse(localStorage.getItem("produtoCartesiano")) == null ? [] : JSON.parse(localStorage.getItem("produtoCartesiano"))
  });

  const updatesSet = (newSets) => {
    updateSet({ ...sets, set: newSets });
    localStorage.setItem("produtoCartesiano", JSON.stringify(newSets));
  }

  const calculate = (expression) => {
    let req = {
        conjunto_a: sets.set.filter( set => set.name === expression.conjunto_a).map(set => set.values),
        conjunto_b: sets.set.filter( set => set.name === expression.conjunto_b).map(set => set.values),
        operacao: expression.operacao1
    }
    axios.post(urlAPI, req).then(response => console.log(response));
  }

  return (
    <div className="App">
      <header>
        <h1>Produto Cartesiano</h1>
      </header>
      <main>
        <h3>Conjuntos</h3>
        <Set action={updatesSet} />
        <Expression options={sets.set.filter(set => set.values.length).map(set => set.name)} calculate={calculate} />
      </main>
    </div>
  );
}

export default App;
