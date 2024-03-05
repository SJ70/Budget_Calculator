import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import BudgetsContainerEl from './components/BudgetsContainerEl';
import EntireAmountsEl from './components/EntireAmountsEl';
import { Budget } from './class/Budget';

// const budgets: Budget[] = [];
// budgets.push(new Budget('식비', 1200));
// budgets.push(new Budget('여가', 12000));

function App() {
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const updateBudget = (id: number, budget: Budget) => {
    const idx = budgets.map(budget => budget.id).indexOf(id);
    const newBudgets = [...budgets];
    newBudgets[idx] = budget;
    setBudgets(newBudgets);
  }

  const addBudget = (budget: Budget) => {
    const newBudgets = [...budgets];
    newBudgets.push(budget);
    setBudgets(newBudgets);
  }

  return (
    <div className="App">
      <Title/>
      <BudgetsContainerEl budgets={budgets} updateBudget={updateBudget} addBudget={addBudget}/>
      <EntireAmountsEl budgets={budgets}/>
    </div>
  );
}

export default App;
