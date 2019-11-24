import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetStartDateAction, SetEndDateAction } from '../../app.actions';

@Component({
  selector: 'comment-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

    constructor(private store: Store<any>) {

    }

    setStartDate(event) {
        this.store.dispatch(new SetStartDateAction(event.target.value));
    }

    setEndDate(event) {
        this.store.dispatch(new SetEndDateAction(event.target.value));
    }
}

