import React from 'react'
import './BudgetsListEl.css';
import './SvgButton.css';
import { Budget } from '../class/Budget';
import BudgetEl from './BudgetEl';
import { ReactComponent as DeleteIcon } from '../svg/delete_forever_FILL1_wght400_GRAD0_opsz24.svg'

type BudgetsListProps = {
    budgets: Budget[]
    setSelectedBudgetId: Function
    setTitle: Function
    setCost: Function
    deleteBudget: Function
    deleteAllBudgets: Function
}

const BudgetsListEl: React.FC<BudgetsListProps> = ({budgets, setSelectedBudgetId, setTitle, setCost, deleteBudget, deleteAllBudgets}) => {

    const handleClear = () => {
        deleteAllBudgets();
    }

    return(
        <div className='budgets-list-el'>
            <div className='budgets-list'>
                {budgets.map(budget => (
                    <BudgetEl id={budget.id} title={budget.title} cost={budget.cost} setSelectedBudgetId={setSelectedBudgetId} setTitle={setTitle} setCost={setCost} deleteBudget={deleteBudget} key={budget.id}/>
                ))}
            </div>
            <button className='svg-btn' onClick={handleClear}>
                <span>목록 지우기</span>
                <DeleteIcon className='svg'/>
            </button>
        </div>
    )
}

export default BudgetsListEl;