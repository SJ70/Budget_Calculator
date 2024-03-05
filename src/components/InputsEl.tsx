import React from 'react';
import './InputsEl.css';

const InputsEl: React.FC = () => {
    return (
        <div className='inputs-container'>
            <div className='input-containers'>
                <div className='input-container'>
                    <span>지출 항목</span>
                    <input type='text' placeholder='예) 렌트비'></input>
                </div>
                <div className='input-container'>
                    <span>비용</span>
                    <input type='number'></input>
                </div>
            </div>
            <button type='submit'>제출</button>
        </div>
    )
}

export default InputsEl;