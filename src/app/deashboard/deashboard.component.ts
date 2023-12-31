import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewStudentComponent } from 'app/students/new-student/new-student.component';

@Component({
  selector: 'app-deashboard',
  templateUrl: './deashboard.component.html',
  styleUrls: ['./deashboard.component.css'],
})
export class DeashboardComponent {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(NewStudentComponent, {
      size: 'xl',
    });
    modalRef.componentInstance.name = 'World';
  }

  closeModal() {
    const modalDiv = document.getElementById('exampleModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

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
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [80, 70, 20, 25, 45, 50, 80, 70, 60, 25, 45, 90],
        label: 'Fee Collection',
        borderColor: '#2ee81077',
        backgroundColor: '#2ee81010',
        fill: true,
        tension: 0.3,
      },
      {
        data: [30, 40, 90, 0, 60, 75, 30, 40, 20, 50, 0, 75],
        label: 'Expense',
        borderColor: '#e8101d77',
        backgroundColor: '#e8101d10',
        fill: true,
        tension: 0.3,
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

  incomeChartData = {
    labels: ['Tuition', 'Donation', 'Book Sale', 'Uniform Sale'],
    datasets: [
      {
        data: [80, 70, 20, 25],
        label: 'Fee Collection',
        backgroundColor: [
          'rgba(255,26,104,0.5)',
          'rgba(54,162,235,0.5)',
          'rgba(255,206,86,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(153,102,255,0.5)',
          'rgba(255,159,64,0.5)',
          'rgba(228,34,215,0.5)',
          'rgba(24,18,212,0.5)',
        ],
        borderWidth: 1,
        cutout: '60%',
        circumference: 180,
        rotation: 270,
        tension: 0.3,
      },
    ],
  };

  incomeChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    options: {
      height: '100%',
      animations: {},
    },
  };

  expenseChartData = {
    labels: [
      'Rent',
      'Stationery',
      'Electricity Bill',
      'Telephone Bill',
      'Internet',
      'Fuel',
      'Miscellaneous',
    ],
    datasets: [
      {
        data: [80, 70, 25, 45, 50, 80, 70],
        label: 'Fee Collection',
        backgroundColor: [
          'rgba(255,26,104,0.5)',
          'rgba(54,162,235,0.5)',
          'rgba(255,206,86,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(153,102,255,0.5)',
          'rgba(255,159,64,0.5)',
          'rgba(228,34,215,0.5)',
          'rgba(24,18,212,0.5)',
        ],
        borderWidth: 1,
        cutout: '60%',
        circumference: 180,
        rotation: 270,
        tension: 0.3,
      },
    ],

    // plugins: [expenseTotal],
  };

  expenseChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    options: {
      height: '100%',
      animations: {},
    },
  };
}
