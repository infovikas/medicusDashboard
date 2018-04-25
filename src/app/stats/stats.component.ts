// import { StatsService } from './../stats.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import * as Chart from 'chart.js';
// import 'chart.js/src/chart.js';
// declare let Chart;
import {Chart} from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  // LineChart: any;
  // constructor() { }
  // NgOnInit() {
  //   this.LineChart = new Chart('lineChart', {
  //     type: 'line',
  //     data: [{
  //       datasets: [{
  //         label: 'Number of Items Sold in Month',
  //         data: [9, 7, 3, 1, 10],
  //         fill: false,
  //         lineTension: 0.2,
  //         borderColor: "red",
  //         borderWidth: 1
  //       }]
  //     }]
  //   })
  // }


  // chart = [];

  // constructor(private _weather: StatsService) { }

  // ngOnInit() {
  //   this._weather.dailyForecast()
  //     .subscribe(res => {

  //       const temp_max = res['list'].map(res => res.main.temp_max);
  //       const temp_min = res['list'].map(res => res.main.temp_min);
  //       const alldates = res['list'].map(res => res.dt);

  //       const weatherDates = []
  //       alldates.forEach((res) => {
  //         const jsdate = new Date(res * 1000)
  //         weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
  //       })

  //       this.chart = new Chart('canvas', {
  //         type: 'line',
  //         data: {
  //           labels: weatherDates,
  //           datasets: [
  //             {
  //               data: temp_max,
  //               borderColor: '#3cba9f',
  //               fill: false
  //             },
  //             {
  //               data: temp_min,
  //               borderColor: '#ffcc00',
  //               fill: false
  //             },
  //           ]
  //         },
  //         options: {
  //           legend: {
  //             display: false
  //           },
  //           scales: {
  //             xAxes: [{
  //               display: true
  //             }],
  //             yAxes: [{
  //               display: true
  //             }]
  //           }
  //         }
  //       })
  //     })
  // }

  @ViewChild('donut') donut: ElementRef;

  constructor(
  ) { }

  ngOnInit() {
    const donutCtx: CanvasRenderingContext2D = this.donut.nativeElement.getContext('2d');

    const data = {
      labels: [
        "Value A",
        "Value B"
      ],
      datasets: [
        {
          "data": [101342, 55342],   // Example data
          "backgroundColor": [
            "#1fc8f8",
            "#76a346"
          ]
        }]
    };

    const chart = new Chart(
      donutCtx,
      {
        "type": 'doughnut',
        "data": data,
        "options": {
          "cutoutPercentage": 50,
          "animation": {
            "animateScale": true,
            "animateRotate": false
          }
        }
      }
    );
  }
}
