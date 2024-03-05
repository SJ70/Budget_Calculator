import React from 'react'
import './BudgetEl.css';
import { ReactComponent as DeleteIcon } from '../svg/delete_forever_FILL1_wght400_GRAD0_opsz24.svg'
import { ReactComponent as EditIcon } from '../svg/edit_FILL1_wght400_GRAD0_opsz24.svg'

type BudgetProps = {
    id: number
    title: string
    cost: number
    setSelectedBudgetId: Function
    setTitle: Function
    setCost: Function
    deleteBudget: Function
}

const BudgetEl: React.FC<BudgetProps> = ({id, title, cost, setSelectedBudgetId, setTitle, setCost, deleteBudget}) => {

    const handleSetBudgetToUpdate = () => {
        setSelectedBudgetId(id);
        setTitle(title);
        setCost(cost);
    }

    const handleDelete = () => {
        deleteBudget(id);
    }

    return(
        <div className='budget-container'>
            <span className='budget-title'>{title}</span>
            <span className='budget-cost'>{cost}</span>
            <EditIcon className='svg edit-btn' onClick={handleSetBudgetToUpdate}/>
            <DeleteIcon className='svg delete-btn' onClick={handleDelete}/>
        </div>
    )
}

export default BudgetEl