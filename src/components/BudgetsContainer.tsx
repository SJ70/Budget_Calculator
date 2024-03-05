import React from 'react';
import Inputs from './Inputs';
import './BudgetsContainer.css';

const BudgetsContainer: React.FC = () => {
    return (
        <div className='budgets-container'>
            <Inputs></Inputs>
        </div>
    )
}

export default BudgetsContainer;