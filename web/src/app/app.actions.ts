import { Action } from '@ngrx/store';
import { Filter } from './models/filter';

// Action names
export enum ActionTypes {
    SET_START_DATE = "[Filter Component] Set Start Date",
    SET_END_DATE = "[Filter Component] Set End Date"
}

export class SetStartDateAction implements Action {
    readonly type = ActionTypes.SET_START_DATE;
    constructor(public payload: Date) {}
}

export class SetEndDateAction implements Action {
    readonly type = ActionTypes.SET_END_DATE;
    constructor(public payload: Date) {}
}

export type Actions = SetStartDateAction | SetEndDateAction;