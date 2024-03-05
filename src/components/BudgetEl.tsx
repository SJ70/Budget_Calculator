import React from 'react'
import './BudgetEl.css';
import { ReactComponent as DeleteIcon } from '../svg/delete_forever_FILL1_wght400_GRAD0_opsz24.svg'
import { ReactComponent as EditIcon } from '../svg/edit_FILL1_wght400_GRAD0_opsz24.svg'

type BudgetProps = {
    title: string
    cost: number
}

const BudgetEl: React.FC<BudgetProps> = ({title, cost}) => {
    return(
        <div className='budget-container'>
            <span className='budget-title'>{title}</span>
            <span className='budget-cost'>{cost}</span>
            <EditIcon className='svg edit-btn'/>
            <DeleteIcon className='svg delete-btn'/>
        </div>
    )
}

export default BudgetEl