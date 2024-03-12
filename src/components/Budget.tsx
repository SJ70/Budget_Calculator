import React, { useState } from 'react'
import './Budget.css';
import { ReactComponent as DeleteIcon } from '../svg/delete_forever_FILL1_wght400_GRAD0_opsz24.svg'
import { ReactComponent as EditIcon } from '../svg/edit_FILL1_wght400_GRAD0_opsz24.svg'
import { IBudget } from '../modules/budgetList';

const Budget: React.FC<{budget: IBudget, handleSetFormData: Function, handleRemove: Function}> = ({ budget, handleSetFormData, handleRemove }) => {

    const [backgroundColor, setBackgroundColor] = useState('white');

    return(
        <div className='budget-container' style={{backgroundColor: backgroundColor}}>
            <span className='budget-title'>{budget.title}</span>
            <span className='budget-cost'>{budget.cost}</span>
            <EditIcon className='svg edit-btn' onClick={() => handleSetFormData(budget)} onMouseOver={() => setBackgroundColor('rgba(56, 107, 165, 0.3)')} onMouseLeave={() => setBackgroundColor('white')}/>
            <DeleteIcon className='svg delete-btn' onClick={() => handleRemove(budget)} onMouseOver={() => setBackgroundColor('rgba(185, 56, 56, 0.3)')} onMouseLeave={() => setBackgroundColor('white')}/>
        </div>
    )
}

export default Budget