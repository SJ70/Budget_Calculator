import './EntireAmounts.css'
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { IBudget } from '../modules/budgetList';

const EntireAmountsEl = () => {
    const budgets: IBudget[] = useSelector((state: RootState) => state.budgetList.list);

    const entireAmount = budgets.map(budget => budget.cost).reduce((a, b) => a + b, 0);
    return (
        <div className='entire-amounts'>
            <span>
                총 지출 : {entireAmount} 원
            </span>
        </div>
    )
}

export default EntireAmountsEl;