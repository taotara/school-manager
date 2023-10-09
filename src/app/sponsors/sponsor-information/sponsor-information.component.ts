import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewSponsorComponent } from '../new-sponsor/new-sponsor.component';


@Component({
  selector: 'app-sponsor-information',
  templateUrl: './sponsor-information.component.html',
  styleUrls: ['./sponsor-information.component.css'],
})
export class SponsorInformationComponent {
  tabs: string[] = ['Sponsor List'];

  activatedTabIndex: number = 0;

  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }

  constructor(private modalService: NgbModal) {}

  openNewSponsorModal() {
    const modalRef = this.modalService.open(NewSponsorComponent, {
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
