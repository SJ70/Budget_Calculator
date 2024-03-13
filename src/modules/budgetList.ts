import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';

const ADD = 'budgetList/ADD';
const REMOVE = 'budgetList/REMOVE';
const REPLACE = 'budgetList/REPLACE';
const CLEAR = 'budgetList/CLEAR';

export const addBudget = createAction(ADD);
export const removeBudget = createAction(REMOVE);
export const replaceBudget = createAction(REPLACE);
export const clearBudget = createAction(CLEAR);

export interface IBudget {
    id: number
    title: string
    cost: number
}

export class Budget implements IBudget {

    private static idValue: number = 0;

    private _title: string;
    private _cost: number;
    private _id: number;

    constructor(title: string, cost: number) {
        if (title.replaceAll(" ","").length === 0) {
            throw new Error("title is empty");
        }
        this._title = title;
        this._cost = cost;
        this._id = Budget.idValue++;
    }

    get title(): string {
        return this._title;
    }

    get cost(): number {
        return this._cost;
    }

    get id(): number {
        return this._id;
    }
}

export interface IBudgetList {
    list: IBudget[]
}

const initialState: IBudgetList = {
    list: [],
}

const inputForm = handleActions<IBudgetList, any> (
    {
        [ADD]: (state, budget) => ({
            list: [budget.payload, ...state.list]
        }),

        [REMOVE]: (state, budget) => ({ 
            list: state.list.filter(item => item !== budget.payload)
        }),

        [REPLACE]: (state, {payload: {selectedId, budget}}) => 
            produce(state, draft => {
                const idx: number = state.list.findIndex(item => item.id === selectedId);
                draft.list[idx] = budget;
            }
        ),
        
        [CLEAR]: () => ({ 
            list: []
        }),
    },
    initialState
);

export default inputForm;