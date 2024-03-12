import './BudgetsList.css';
import './SvgButton.css';
import { ReactComponent as DeleteIcon } from '../svg/delete_forever_FILL1_wght400_GRAD0_opsz24.svg'
import { IBudget, IBudgetList, clearBudget, removeBudget } from '../modules/budgetList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import Budget from './Budget';
import { IInputFormData, setFormData } from '../modules/inputForm';
import { Action } from 'redux';
import { notificateCleared, notificateRemoved } from '../modules/notification';

const BudgetsList = () => {

    const budgets: IBudgetList = useSelector((state: RootState) => state.budgetList);

    const dispatch = useDispatch();

    const onSetFormData = (data: IInputFormData) => dispatch(setFormData(data) as Action);

    const onRemove = (budget: IBudget) => dispatch(removeBudget(budget) as Action);
    const onClear = () => dispatch(clearBudget() as Action);

    const onNotificateRemoved = () => dispatch(notificateRemoved() as Action);
    const onNotificateCleared = () => dispatch(notificateCleared() as Action);

    const handleSetFormData = (budget: IBudget) => {
        onSetFormData({
            selectedId: budget.id,
            title: budget.title,
            cost: budget.cost
        });
    }

    const handleRemove = (budget: IBudget) => {
        onRemove(budget);
        onNotificateRemoved();
    }

    const handleClear = () => {
        onClear();
        onNotificateCleared();
    }

    return(
        <div className='budgets-list-el'>
            <div className='budgets-list'>
                {budgets.list.map(budget => (
                    <Budget key={budget.id} budget={budget} handleSetFormData={handleSetFormData} handleRemove={handleRemove} />
                ))}
            </div>
            <button className='svg-btn' onClick={handleClear}>
                <span>목록 지우기</span>
                <DeleteIcon className='svg'/>
            </button>
        </div>
    )
}

export default BudgetsList;