import React from 'react';
import InputsEl from './InputsEl';
import BudgetsListEl from './BudgetsListEl';
import './BudgetsContainerEl.css';
import { Budget } from '../class/Budget';

const budgets: Budget[] = [];
budgets.push(new Budget('식비', 1200));
budgets.push(new Budget('여가', 12000));

const BudgetsContainerEl: React.FC = () => {
    return (
        <div className='budgets-container'>
            <InputsEl></InputsEl>
            <BudgetsListEl budgets={budgets}></BudgetsListEl>
        </div>
    )
}

export default BudgetsContainerEl;