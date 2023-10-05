import { Component } from '@angular/core';


interface Reports {
  subject: string;
  examObtMark: number;
  examMaxMark: number;
  testObtMark: number;
  testMaxMark: number;
  assignmentObtMark: number;
  assignmentMaxMark: number;
  points: number;
  grade: string;
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
    points: 5,
    grade: 'A',
  },
  {
    subject: 'Social Studies',
    examObtMark: 45,
    examMaxMark: 60,
    testObtMark: 22,
    testMaxMark: 30,
    assignmentObtMark: 5,
    assignmentMaxMark: 10,
    points: 4,
    grade: 'B',
  },
  {
    subject: 'Catering Craft',
    examObtMark: 50,
    examMaxMark: 60,
    testObtMark: 25,
    testMaxMark: 30,
    assignmentObtMark: 8,
    assignmentMaxMark: 10,
    points: 4,
    grade: 'B',
  },
  {
    subject: 'Physical And Health Education',
    examObtMark: 36,
    examMaxMark: 60,
    testObtMark: 28,
    testMaxMark: 30,
    assignmentObtMark: 10,
    assignmentMaxMark: 10,
    points: 3,
    grade: 'C',
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
