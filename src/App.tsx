import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import BudgetsContainerEl from './components/BudgetsContainerEl';
import EntireAmountsEl from './components/EntireAmountsEl';
import { Budget } from './class/Budget';
import StateType from './enum/StateType';
import Notification from './components/Notification';

function App() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [stateType, setStateType] = useState<StateType>(StateType.None);

  const updateBudget = (id: number, budget: Budget) => {
    const idx = budgets.map(budget => budget.id).indexOf(id);
    const newBudgets = [...budgets];
    newBudgets[idx] = budget;
    setBudgets(newBudgets);
  }

  const addBudget = (budget: Budget) => {
    setBudgets([budget, ...budgets]);
  }

  const deleteBudget = (id: number) => {
    setBudgets(budgets.filter(budget => budget.id !== id));
  }

  const deleteAllBudgets = (id: number) => {
    setBudgets([]);
  }

  return (
    <div className="App">
      <Title/>
      <BudgetsContainerEl budgets={budgets} updateBudget={updateBudget} addBudget={addBudget} deleteBudget={deleteBudget} deleteAllBudgets={deleteAllBudgets} setStateType={setStateType}/>
      <EntireAmountsEl budgets={budgets}/>
      <Notification stateType={stateType} budgets={budgets}/>
    </div>
  );
}

export default App;
