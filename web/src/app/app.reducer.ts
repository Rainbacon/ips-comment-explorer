import { Actions, ActionTypes } from './app.actions';

const initialState = {}

export function appReducer(state=initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.SET_FILTERS: {
            return {
                ...state,
                filters: action.payload
            };
        }
    }
}