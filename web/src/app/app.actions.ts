import { Action } from '@ngrx/store';
import { Filter } from './models/filter';

// Action names
export enum ActionTypes {
    SET_FILTERS = "[Filter Component] Set Filters"
}

export class SetFilterAction implements Action {
    readonly type = ActionTypes.SET_FILTERS;
    constructor(public payload: Filter) {}
}

export type Actions = SetFilterAction;