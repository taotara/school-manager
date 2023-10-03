import { Component } from '@angular/core';


interface Reports {
  subject: string;
  examObtMark: number;
  examMaxMark: number;
  testObtMark: number;
  testMaxMark: number;
  assignmentObtMark: number;
  assignmentMaxMark: number;
  mode: string;
  paymentDate: string;
  discount: number;
}

const REPORTS: Reports[] = [
  {
    subject: 'Home Economic',
    examObtMark: 52,
    examMaxMark: 60,
    testObtMark: 22,
    testMaxMark: 30,
    assignmentObtMark: 9,
    assignmentMaxMark: 10,
    mode: 'cash',
    paymentDate: '10/02/2023',
    discount: 0,
  },
  {
    subject: 'Social Studies',
    examObtMark: 45,
    examMaxMark: 60,
    testObtMark: 22,
    testMaxMark: 30,
    assignmentObtMark: 5,
    assignmentMaxMark: 10,
    mode: 'transfer',
    paymentDate: '10/02/2023',
    discount: 20000,
  },
  {
    subject: 'Catering Craft',
    examObtMark: 50,
    examMaxMark: 60,
    testObtMark: 25,
    testMaxMark: 30,
    assignmentObtMark: 8,
    assignmentMaxMark: 10,
    mode: 'pos',
    paymentDate: '10/02/2023',
    discount: 15000,
  },
  {
    subject: 'Physical And Health Education',
    examObtMark: 36,
    examMaxMark: 60,
    testObtMark: 28,
    testMaxMark: 30,
    assignmentObtMark: 10,
    assignmentMaxMark: 10,
    mode: '',
    paymentDate: '10/02/2023',
    discount: 0,
  },
];

@Component({
  selector: 'app-student-report',
  templateUrl: './student-report.component.html',
  styleUrls: ['./student-report.component.css'],
})
export class StudentReportComponent {
  reports = REPORTS;
  
}
