import { Actions, ActionTypes } from './app.actions';
import { Filter } from './models/filter';

interface State {
    filter: Filter
}

const initialState: State = {
    filter: {
        startDate: new Date(),
        endDate: new Date()
    }
}

export function AppReducer(state=initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.SET_START_DATE: {
            return {
                ...state,
                filters: {
                    ...state,
                    startDate: action.payload
                }
            };
        }
        case ActionTypes.SET_END_DATE: {
            return {
                ...state,
                filters: {
                    ...state,
                    endDate: action.payload
                }
            };
        }
    }
}