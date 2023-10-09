import { Component } from '@angular/core';
import {
  NgbActiveModal,
  NgbDateStruct,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-sponsor',
  templateUrl: './new-sponsor.component.html',
  styleUrls: ['./new-sponsor.component.css'],
})
export class NewSponsorComponent {
  constructor(config: NgbModalConfig, public activeModal: NgbActiveModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  model!: NgbDateStruct;
}
