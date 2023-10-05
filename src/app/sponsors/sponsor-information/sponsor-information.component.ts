import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewStudentComponent } from 'app/students/new-student/new-student.component';


@Component({
  selector: 'app-sponsor-information',
  templateUrl: './sponsor-information.component.html',
  styleUrls: ['./sponsor-information.component.css'],
})
export class SponsorInformationComponent {
  tabs: string[] = ['Sponsor List', 'Link Student'];

  activatedTabIndex: number = 0;

  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  constructor(private modalService: NgbModal) {}

  openNewStudentModal() {
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
}
