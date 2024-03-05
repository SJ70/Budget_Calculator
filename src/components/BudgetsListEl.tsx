import React from 'react'
import './BudgetsListEl.css';
import { Budget } from '../class/Budget';
import BudgetEl from './BudgetEl';

type BudgetsListProps = {
    budgets: Budget[]
    deleteBudget: Function
    deleteAllBudgets: Function
}

const BudgetsListEl: React.FC<BudgetsListProps> = ({budgets, deleteBudget, deleteAllBudgets}) => {

    const handleClear = () => {
        deleteAllBudgets();
    }

    return(
        <div>
            <div className='budgets-list'>
                {budgets.map(budget => (
                    <BudgetEl title={budget.title} cost={budget.cost} key={budget.id}/>
                ))}
            </div>
            <button type='reset' onClick={handleClear}>목록 지우기</button>
        </div>
    )
}

export default BudgetsListEl;