import { Component } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-sponsor',
  templateUrl: './view-sponsor.component.html',
  styleUrls: ['./view-sponsor.component.css'],
})
export class ViewSponsorComponent {
  constructor(config: NgbModalConfig, public activeModal: NgbActiveModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  tabs: string[] = ['Sponsor Details', 'Link Student(s)'];

  activatedTabIndex: number = 0;

  tabChange(tabIndex: number) {
    this.activatedTabIndex = tabIndex;
  }
}
