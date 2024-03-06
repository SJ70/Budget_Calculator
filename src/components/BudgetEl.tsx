import React, { useState } from 'react'
import './BudgetEl.css';
import { ReactComponent as DeleteIcon } from '../svg/delete_forever_FILL1_wght400_GRAD0_opsz24.svg'
import { ReactComponent as EditIcon } from '../svg/edit_FILL1_wght400_GRAD0_opsz24.svg'
import StateType from '../enum/StateType';

type BudgetProps = {
    id: number
    title: string
    cost: number
    setSelectedBudgetId: Function
    setTitle: Function
    setCost: Function
    deleteBudget: Function
    setStateType: Function
}

const BudgetEl: React.FC<BudgetProps> = ({id, title, cost, setSelectedBudgetId, setTitle, setCost, deleteBudget, setStateType}) => {

    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleSetBudgetToUpdate = () => {
        setSelectedBudgetId(id);
        setTitle(title);
        setCost(cost);
    }

    const handleDelete = () => {
        setStateType(StateType.Deleted);
        deleteBudget(id);
    }

    return(
        <div className='budget-container' style={{backgroundColor: backgroundColor}}>
            <span className='budget-title'>{title}</span>
            <span className='budget-cost'>{cost}</span>
            <EditIcon className='svg edit-btn' onClick={handleSetBudgetToUpdate} onMouseOver={() => setBackgroundColor('rgba(56, 107, 165, 0.3)')} onMouseLeave={() => setBackgroundColor('white')}/>
            <DeleteIcon className='svg delete-btn' onClick={handleDelete} onMouseOver={() => setBackgroundColor('rgba(185, 56, 56, 0.3)')} onMouseLeave={() => setBackgroundColor('white')}/>
        </div>
    )
}

export default BudgetEl