import React from 'react';
import './App.css';
import Title from './components/Title';
import BudgetsContainerEl from './components/BudgetsContainerEl';
import EntireAmountsEl from './components/EntireAmountsEl';
import { Budget } from './class/Budget';

const budgets: Budget[] = [];
budgets.push(new Budget('식비', 1200));
budgets.push(new Budget('여가', 12000));

function App() {
  return (
    <div className="App">
      <Title/>
      <BudgetsContainerEl budgets={budgets}/>
      <EntireAmountsEl budgets={budgets}/>
    </div>
  );
}

export default App;
