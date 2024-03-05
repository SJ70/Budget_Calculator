import React, { useState } from 'react';
import './InputsEl.css';
import { Budget } from '../class/Budget';
import { ReactComponent as SubmitIcon } from '../svg/send_FILL1_wght400_GRAD0_opsz24.svg';

type BudgetFnProps = {
    selectedBudgetId: number | null
    setSelectedBudgetId: Function
    updateBudget: Function
    addBudget: Function
}

const InputsEl: React.FC<BudgetFnProps> = ({selectedBudgetId, setSelectedBudgetId, updateBudget, addBudget}) => {

    const [title, setTitle] = useState("");
    const [cost, setCost] = useState(0);


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCost(Number(e.target.value));
    }

    const handleSubmit = () => {
        const budget: Budget = new Budget(title, cost);
        selectedBudgetId ? updateBudget(selectedBudgetId, budget) : addBudget(budget);
        setSelectedBudgetId(null);
        setTitle("");
        setCost(0);
    }

    return (
        <div className='inputs-container'>
            <div className='input-containers'>
                <div className='input-container'>
                    <span>지출 항목</span>
                    <input type='text' onChange={handleTitleChange} value={title} placeholder='예) 렌트비'></input>
                </div>
                <div className='input-container'>
                    <span>비용</span>
                    <input type='number' onChange={handleCostChange} value={cost}></input>
                </div>
            </div>
            <button className='svg-btn' type='submit' onClick={handleSubmit}>
                제출
                <SubmitIcon className='svg'/>
            </button>
        </div>
    )
}

export default InputsEl;