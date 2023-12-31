import { Component } from '@angular/core';
import {
  NgbActiveModal,
  NgbModalConfig,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.css'],
})
export class EditSponsorComponent {
  constructor(config: NgbModalConfig, public activeModal: NgbActiveModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  model!: NgbDateStruct;
}
