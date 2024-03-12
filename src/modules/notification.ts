import { createAction, handleActions } from 'redux-actions';

const ADD = 'notification/ADD';
const REPLACE = 'notification/REPLACE';
const REMOVE = 'notification/REMOVE';
const CLEAR = 'notification/CLEAR';

export const notificateAdded = createAction(ADD);
export const notificateRemoved = createAction(REMOVE);
export const notificateReplaced = createAction(REPLACE);
export const notificateCleared = createAction(CLEAR);

export interface INotification {
    text: string
    color: string
}

const initialState: INotification = {
    text: '',
    color: '',
}

const notification = handleActions<INotification, any> (
    {
        [ADD]: () => ({
            text: '아이템이 추가되었습니다.',
            color: 'blue',
        }),

        [REMOVE]: () => ({ 
            text: '아이템이 삭제되었습니다.',
            color: 'red',
        }),

        [REPLACE]: () =>  ({ 
            text: '아이템이 수정되었습니다.',
            color: 'blue',
        }),
        
        [CLEAR]: () => ({ 
            text: '모든 아이템들이 삭제되었습니다.',
            color: 'red',
        }),
    },
    initialState
);

export default notification;