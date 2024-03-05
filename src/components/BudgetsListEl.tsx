import React from 'react'
import './BudgetsListEl.css';
import { Budget } from '../class/Budget';
import BudgetEl from './BudgetEl';

type Budgets = {
    budgets: Budget[]
}

const BudgetsListEl: React.FC<Budgets> = ({budgets}) => {
    return(
        <div>
            <div className='budgets-list'>
                {budgets.map(budget => (
                    <BudgetEl title={budget.title} cost={budget.cost} key={budget.id}/>
                ))}
            </div>
            <button type='reset'>목록 지우기</button>
        </div>
    )
}

export default BudgetsListEl;