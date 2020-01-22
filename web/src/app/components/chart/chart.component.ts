import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'comment-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
    chart = new Chart({
        chart: {
            type: 'line'
        },
        title: {
            text: 'IPS Comments By Date'
        }
    });

    constructor(private store: Store<any>) {
        this.store.select('comments').subscribe(comments => {
            this.chart.removeSeries(0);
            this.chart.addSeries({
                
            })
        })
    }

}

