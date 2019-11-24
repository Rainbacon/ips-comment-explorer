import { FilterActions, FilterActionTypes } from './filter.actions';
import { FilterState, initialFilter } from '../../models/filter';

export function FilterReducer(state=initialFilter, action: FilterActions): FilterState {

    switch(action.type) {
        case FilterActionTypes.SET_START_DATE: {
            return {
                    ...state,
                    startDate: action.payload
            };
        }
        case FilterActionTypes.SET_END_DATE: {
            return {
                ...state,
                endDate: action.payload
            };
        }
    }
}
