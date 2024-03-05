import React from 'react';
import './InputsEl.css';
import { Budget } from '../class/Budget';
import { ReactComponent as SubmitIcon } from '../svg/send_FILL1_wght400_GRAD0_opsz24.svg';

type BudgetFnProps = {
    selectedBudgetId: number | null
    title: string
    setTitle: Function
    cost: number
    setCost: Function
    setSelectedBudgetId: Function
    updateBudget: Function
    addBudget: Function
}

const InputsEl: React.FC<BudgetFnProps> = ({title, setTitle, cost, setCost, selectedBudgetId, setSelectedBudgetId, updateBudget, addBudget}) => {

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCost(Number(e.target.value));
    }

    const handleSubmit = () => {
        try {
            const budget: Budget = new Budget(title, cost);
            selectedBudgetId ? updateBudget(selectedBudgetId, budget) : addBudget(budget);
            setSelectedBudgetId(null);
            setTitle("");
            setCost(0);
        }
        catch {
            window.alert("올바른 항목명을 입력해주세요.");
            setTitle("");
            document.getElementById('input-title')?.focus();
        }
    }

    return (
        <div className='inputs-container'>
            <div className='input-containers'>
                <div className='input-container'>
                    <span>지출 항목</span>
                    <input id='input-title' type='text' onChange={handleTitleChange} value={title} placeholder='예) 렌트비'></input>
                </div>
                <div className='input-container'>
                    <span>비용</span>
                    <input type='number' onChange={handleCostChange} value={cost}></input>
                </div>
            </div>
            <button className='svg-btn' type='submit' onClick={handleSubmit}>
                {selectedBudgetId ? '수정' :'제출'}
                <SubmitIcon className='svg'/>
            </button>
        </div>
    )
}

export default InputsEl;