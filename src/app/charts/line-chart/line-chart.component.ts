import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 46, 23, 38, 56], label: 'Sentiment Analisis'},
  { data: [12, 34, 26, 33, 43, 16], label: 'Image Recognation'},
  { data: [33, 14, 36, 53, 68, 86], label: 'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan','Feb','Mar','Apr','May','Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }

}
