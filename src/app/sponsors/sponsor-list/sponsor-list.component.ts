import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ViewSponsorComponent } from '../view-sponsor/view-sponsor.component';
import { EditSponsorComponent } from '../edit-sponsor/edit-sponsor.component';

interface Sponsor {
  id?: number;
  name: string;
  email: string;
  telephone: string;
}

const SPONSORS: Sponsor[] = [
  {
    name: 'Jhon Loco',
    email: 'jloco@mail.com',
    telephone: '08034567891',
  },
  {
    name: 'Francis Duru',
    email: 'fduru@mail.com',
    telephone: '07098564217',
  },
  {
    name: 'George Wilson',
    email: 'wilson@slade.com',
    telephone: '09087354164',
  },
  {
    name: 'Amadu Bello',
    email: 'abello@mail.com',
    telephone: '06156894231',
  },
  {
    name: 'Aisha Baba',
    email: 'aisha@mail.com',
    telephone: '05011155964',
  },
  {
    name: 'Ipaye Adewale',
    email: 'adewalei@mango.com',
    telephone: '01456879458',
  },
  {
    name: 'Abdulbasit Omiran',
    email: 'abdulbasit@omiran.com',
    telephone: '11111111111',
  },
  {
    name: 'Moraks Shina',
    email: 'moraks@mail.com',
    telephone: '22222222222',
  },
  {
    name: 'Alaseyika Kamordeen',
    email: 'k.alseyika@mail.com',
    telephone: '12345678901',
  },
  {
    name: 'India Martins',
    email: 'india@mail.com',
    telephone: '1324171354',
  },
  {
    name: 'Idowu Olobe',
    email: 'olobe@mail.com',
    telephone: '263991379',
  },
  {
    name: 'Nwanch Kamsiyochukwu',
    email: 'kamsi@mail.com',
    telephone: '11097568972',
  },
  {
    name: 'Cole Smith',
    email: 'cole@smith.com',
    telephone: '14095173974',
  },
];

@Component({
  selector: 'app-sponsor-list',
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    NgFor,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbTooltipModule,
  ],
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.css'],
})
export class SponsorListComponent {
  page = 1;
  pageSize = 4;
  collectionSize = SPONSORS.length;
  sponsors!: Sponsor[];

  closeResult = '';

  constructor(private modalService: NgbModal) {
    this.refreshSponsors();
  }

  refreshSponsors() {
    this.sponsors = SPONSORS.map((Sponsor, i) => ({
      id: i + 1,
      ...Sponsor,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  openSponsorDetailsModal() {
    const modalRef = this.modalService.open(ViewSponsorComponent, {
      size: 'xl',
    });
  }

  openEditSponsorModal() {
    const modalRef = this.modalService.open(EditSponsorComponent, {
      size: 'xl',
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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

  closeModal() {
    const modalDiv = document.getElementById('exampleModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
