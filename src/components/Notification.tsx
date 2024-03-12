import { useEffect, useState } from 'react';
import './Notification.css';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { IBudget } from '../modules/budgetList';
import { INotification } from '../modules/notification';

const Notification = () => {

    const budgets: IBudget[] = useSelector((state: RootState) => state.budgetList.list);
    const notification: INotification = useSelector((state: RootState) => state.notification);

    const [animationKey, setAnimatonKey] = useState<number>(0);
    const [backgroundColor, setBackgroundColor] = useState<string>('');

    useEffect(() => {
        setBackgroundColor(notification.color);
        setAnimatonKey(animationKey => animationKey + 1);
    }, [budgets]);

    return (
        <div key={animationKey} className={`notification ${backgroundColor}`}>
            <p> {notification.text} </p>
        </div>
    )
}

export default Notification;