import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions: Object = {};

  @Input() data: Object = [];

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region',
        style: {
          color: '#fff',
        },
      },
      yAxis: {
        title: {
          enabled: false,
        },
        labels: {
          enabled: false,
        },
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        labels: {
          style: {
            color: '#fff',
          },
        },
      },
      legend: {
        itemStyle: {
          color: '#fff',
        },
        itemHoverStyle: {
          color: 'green',
        },
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
