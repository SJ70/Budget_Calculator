import React from 'react';
import InputsEl from './InputsEl';
import BudgetsListEl from './BudgetsListEl';
import './BudgetsContainerEl.css';
import { Budget } from '../class/Budget';

type Budgets = {
    budgets: Budget[]
}

const BudgetsContainerEl: React.FC<Budgets> = ({budgets}) => {
    return (
        <div className='budgets-container'>
            <InputsEl></InputsEl>
            <BudgetsListEl budgets={budgets}></BudgetsListEl>
        </div>
    )
}

export default BudgetsContainerEl;