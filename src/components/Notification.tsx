import { useEffect, useState } from 'react';
import StateType from '../enum/StateType';
import { Budget } from '../class/Budget';
import './Notification.css';

type NotificationProps = {
    budgets: Budget[]
    stateType: StateType;
}

const Notification: React.FC<NotificationProps> = ({budgets, stateType}) => {

    const [animationKey, setAnimatonKey] = useState<number>(0);
    const [backgroundColor, setBackgroundColor] = useState<string>('');

    useEffect(() => {
        const color = stateType === StateType.None ? '' : (stateType === StateType.Added || stateType === StateType.Edited) ? 'blue' : 'red';
        setBackgroundColor(color);
        console.log(color, backgroundColor);
        setAnimatonKey(animationKey => animationKey + 1);
    }, [budgets]);

    return (
        <div key={animationKey} className={`notification ${backgroundColor}`}>
            <p>{stateType}</p>
        </div>
    )
}

export default Notification;