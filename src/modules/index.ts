import { combineReducers } from 'redux';
import inputForm from './inputForm';
import budgetList from './budgetList';
import notification from './notification';

const rootReducer = combineReducers({
    inputForm,
    budgetList,
    notification
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;