import React from 'react'
import { Budget } from '../class/Budget'
import './EntireAmountsEl.css'

type Budgets = {
    budgets: Budget[]
}

const EntireAmountsEl: React.FC<Budgets> = ({budgets}) => {
    const entireAmount = budgets.map(budget => budget.cost).reduce((a, b) => a + b, 0);
    return (
        <div className='entire-amounts'>
            <span>
                총 지출 : {entireAmount}원
            </span>
        </div>
    )
}

export default EntireAmountsEl;