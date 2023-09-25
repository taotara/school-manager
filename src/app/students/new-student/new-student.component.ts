import { Component } from '@angular/core';
import {
  NgbActiveModal,
  NgbDateStruct,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
})
export class NewStudentComponent {
  constructor(config: NgbModalConfig, public activeModal: NgbActiveModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  model!: NgbDateStruct;
  current!: { year: number; month: number } | null;

  next!: { year: number; month: number };
}
