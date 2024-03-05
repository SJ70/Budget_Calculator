import React, { useState } from 'react';
import InputsEl from './InputsEl';
import BudgetsListEl from './BudgetsListEl';
import './BudgetsContainerEl.css';
import { Budget } from '../class/Budget';

type BudgetsContainerProps = {
    budgets: Budget[]
    updateBudget: Function
    addBudget: Function
    deleteBudget: Function
    deleteAllBudgets: Function
}

const BudgetsContainerEl: React.FC<BudgetsContainerProps> = ({budgets, updateBudget, addBudget, deleteBudget, deleteAllBudgets}) => {

    const [selectedBudgetId, setSelectedBudgetId] = useState(null);

    return (
        <div className='budgets-container'>
            <InputsEl selectedBudgetId={selectedBudgetId} setSelectedBudgetId={setSelectedBudgetId} updateBudget={updateBudget} addBudget={addBudget}/>
            <BudgetsListEl budgets={budgets} deleteBudget={deleteBudget} deleteAllBudgets={deleteAllBudgets}/>
        </div>
    )
}

export default BudgetsContainerEl;