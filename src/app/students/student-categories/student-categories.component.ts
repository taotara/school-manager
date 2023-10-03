import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

interface Category {
  categoryName: string;
  categoryId: number;
}

const CATEGORIES: Category[] = [
  {
    categoryId: 1,
    categoryName: 'General',
  },
  {
    categoryId: 2,
    categoryName: 'Special Need',
  },
  {
    categoryId: 3,
    categoryName: 'Physically Challenged',
  },
  {
    categoryId: 4,
    categoryName: 'Down',
  },
];

@Component({
  selector: 'app-student-categories',
  templateUrl: './student-categories.component.html',
  styleUrls: ['./student-categories.component.css'],
})
export class StudentCategoriesComponent {
  categories = CATEGORIES;
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(editCategory: any) {
    this.modalService
      .open(editCategory, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },

        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openD(deleteCategory: any) {
    this.modalService
      .open(deleteCategory, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },

        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
