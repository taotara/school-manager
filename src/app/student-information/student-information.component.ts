import { Component } from '@angular/core';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent {
  tabs: string[] = ['User List', 'Student Categary'];

  activatedTabIndex: number = 0;

  tabChange(tabIndex:number) {
    this.activatedTabIndex = tabIndex;
  }
}
