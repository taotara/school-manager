import { Component } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-link-student',
  templateUrl: './link-student.component.html',
  styleUrls: ['./link-student.component.css'],
})
export class LinkStudentComponent {
  selectedCar!: number;

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];


}
