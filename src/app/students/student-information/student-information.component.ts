import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css'],
})
export class StudentInformationComponent {
  tabs: string[] = ['Student List', 'Student Categary'];

  activatedTabIndex: number = 0;

  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  constructor(private modalService: NgbModal) {}

  openModal() {
    // const modalRef = this.modalService.open(NewStudentComponent, {
    //   size: 'xl',
    // });
    // modalRef.componentInstance.name = 'World';
  }

  closeModal() {
    const modalDiv = document.getElementById('exampleModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
