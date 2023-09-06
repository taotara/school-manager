import { Component } from '@angular/core';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-deashboard',
  templateUrl: './deashboard.component.html',
  styleUrls: ['./deashboard.component.css'],
})
export class DeashboardComponent {
  barChartData = {
    labels: [
      '2023-09-01',
      '2023-09-02',
      '2023-09-03',
      '2023-09-04',
      '2023-09-05',
      '2023-09-06',
      '2023-09-07',
      '2023-09-08',
      '2023-09-09',
      '2023-09-10',
      '2023-09-11',
      '2023-09-12',
      '2023-09-13',
      '2023-09-14',
      '2023-09-15',
      '2023-09-16',
      '2023-09-17',
      '2023-09-18',
      '2023-09-19',
      '2023-09-20',
      '2023-09-21',
      '2023-09-22',
      '2023-09-23',
      '2023-09-24',
      '2023-09-25',
      '2023-09-26',
      '2023-09-27',
      '2023-09-28',
      '2023-09-29',
      '2023-09-30',
    ],
    datasets: [
      {
        data: [80, 70, 60, 25, 45, 90],
        label: 'Fee Collection',
        borderColor: '#36A2EB',
        backgroundColor: '#2ee81077',
      },
      {
        data: [30, 40, 20, 50, 60, 75],
        label: 'Expense',
        borderColor: '#36A2EB',
        backgroundColor: '#e8101d77',
      },
    ],
  };

  barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    option: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
    },
  };

  lineChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Dec',
    ],
    datasets: [
      {
        data: [80, 70, 60, 25, 45, 90, 80, 70, 60, 25, 45, 90],
        label: 'Fee Collection',
        borderColor: '#2ee81077',
        backgroundColor: '#2ee81077',
        tension: 0.4,
      },
      {
        data: [30, 40, 20, 50, 60, 75, 30, 40, 20, 50, 60, 75],
        label: 'Expense',
        borderColor: '#e8101d77',
        backgroundColor: '#e8101d77',
        tension: 0.4,
      },
    ],
  };

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
        },
      },
    },
  };
}
