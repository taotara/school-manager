import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-link-student',
  templateUrl: './link-student.component.html',
  styleUrls: ['./link-student.component.css'],
})
export class LinkStudentComponent {
  selectedStudent!: number;

  students = [
    { id: 1, name: 'Salawudeen Kamorudeen' },
    { id: 2, name: 'Godwin Asuquo' },
    { id: 3, name: 'Ossai Chika' },
    { id: 4, name: 'Olatunji Baki' },
    { id: 5, name: 'Victor Ezenagu' },
    { id: 6, name: 'Giwa Yisa' },
    { id: 7, name: 'Umar Afkhawa' },
    { id: 8, name: 'Akinteye Babatunde' },
  ];

  submit() {
    console.log(this.students);
  }
}
