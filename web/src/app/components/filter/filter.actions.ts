import { Action } from '@ngrx/store';
import { FilterState } from '../../models/filter';

export enum FilterActionTypes {
    SET_START_DATE = "[Filter Component] Set Start Date",
    SET_END_DATE = "[Filter Component] Set End Date"
}

export class SetStartDateAction implements Action {
    readonly type = FilterActionTypes.SET_START_DATE;
    constructor(public payload: Date) {}
}

export class SetEndDateAction implements Action {
    readonly type = FilterActionTypes.SET_END_DATE;
    constructor(public payload: Date) {}
}

export type FilterActions = SetStartDateAction | SetEndDateAction;