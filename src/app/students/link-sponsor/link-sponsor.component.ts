import { Component } from '@angular/core';

@Component({
  selector: 'app-link-sponsor',
  templateUrl: './link-sponsor.component.html',
  styleUrls: ['./link-sponsor.component.css'],
})
export class LinkSponsorComponent {
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
