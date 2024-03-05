import React from 'react'
import './BudgetEl.css';

type BudgetProps = {
    title: string
    cost: number
}

const BudgetEl: React.FC<BudgetProps> = ({title, cost}) => {
    return(
        <div className='budget-container'>
            <span className='budget-title'>{title}</span>
            <span className='budget-cost'>{cost}</span>
            {/* 수정 버튼 */}
            {/* 삭제 버튼 */}
        </div>
    )
}

export default BudgetEl