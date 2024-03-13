import './InputForm.css';
import { ReactComponent as SubmitIcon } from '../svg/send_FILL1_wght400_GRAD0_opsz24.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { IInputFormData, setFormCost, setFormTitle, clearFormData } from '../modules/inputForm';
import { Budget, addBudget, replaceBudget } from '../modules/budgetList';
import { Action } from 'redux';
import { notificateAdded, notificateReplaced } from '../modules/notification';

const InputForm = () => {

    const formData: IInputFormData = useSelector((state: RootState) => state.inputForm);

    const dispatch = useDispatch();
    
    const onSetFormTitle = (title: string) => dispatch(setFormTitle(title) as Action);
    const onSetFormCost = (cost: number) => dispatch(setFormCost(cost) as Action);
    const onClearFormData = () => dispatch(clearFormData() as Action);

    const onAddBudget = (budget: Budget) => dispatch(addBudget(budget) as Action);
    const onReplaceBudget = (selectedId: number, budget: Budget) => dispatch(replaceBudget({selectedId, budget}) as Action);

    const onNotificateAdded = () => dispatch(notificateAdded() as Action);
    const onNotificateReplaced = () => dispatch(notificateReplaced() as Action);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSetFormTitle(e.target.value);
    }

    const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSetFormCost(Number(e.target.value));
    }

    const handleSubmit = () => {
        try {
            const budget: Budget = new Budget(formData.title, formData.cost);
            formData.selectedId === null ? onAddBudget(budget) : onReplaceBudget(formData.selectedId, budget);
            formData.selectedId === null ? onNotificateAdded() : onNotificateReplaced();
            onClearFormData();
        }
        catch {
            window.alert("올바른 항목명을 입력해주세요.");
            onSetFormTitle("");
            document.getElementById('input-title')?.focus();
        }
    }

    return (
        <div className='inputs-container'>
            <div className='input-containers'>
                <div className='input-container'>
                    <span>지출 항목</span>
                    <input id='input-title' type='text' onChange={handleTitleChange} value={formData.title} placeholder='예) 렌트비'></input>
                </div>
                <div className='input-container'>
                    <span>비용</span>
                    <input type='number' onChange={handleCostChange} value={formData.cost} step="10"></input>
                </div>
            </div>
            <button className='svg-btn' type='submit' onClick={handleSubmit}>
                <span>{formData.selectedId === null ? '제출' :'수정'}</span>
                <SubmitIcon className='svg'/>
            </button>
        </div>
    )
}

export default InputForm;