import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET = 'inputForm/SET';
const SET_TITLE = 'inputForm/SET_TITLE';
const SET_COST = 'inputForm/SET_COST';
const CLEAR = 'inputForm/CLEAR';

export const setFormData = createAction(SET);
export const setFormTitle = createAction(SET_TITLE);
export const setFormCost = createAction(SET_COST);
export const clearFormData = createAction(CLEAR);

export interface IInputFormData {
    selectedId: number | null,
    title: string,
    cost: number
}

const initialState = {
    selectedId: null,
    title: "",
    cost: 0,
};

const inputForm = handleActions<IInputFormData, any> (
    {
        [SET]: (state, {payload: {selectedId, title, cost}}) => ({ 
            selectedId: selectedId,
            title: title,
            cost: cost
        }),

        [SET_TITLE]: (state, {payload: title}) => 
            produce(state, draft => {
                draft.title = title;
            }
        ),

        [SET_COST]: (state, {payload: cost}) => 
            produce(state, draft => {
                draft.cost = cost;
            }
        ),
        
        [CLEAR]: () => ({ 
            selectedId: null,
            title: "",
            cost: 0
        })
    },
    initialState
);

export default inputForm;