import { Component } from '@angular/core';

interface Fees {
  name: string;
  code: string;
  dueDate: string;
  status: string;
  amount: number;
  paid: number;
  paymentId: number;
  mode: string;
  paymentDate: string;
  discount: number;
}

const FEES: Fees[] = [
  {
    name: 'JSS 1 Third Term Fee',
    code: 'js1003',
    dueDate: '04/10/2023',
    status: 'partial',
    amount: 150000,
    paid: 130000,
    paymentId: 20540,
    mode: 'cash',
    paymentDate: '10/02/2023',
    discount: 0,
  },
  {
    name: 'JSS 2 First Term Fee',
    code: 'js2001',
    dueDate: '04/10/2023',
    status: 'paid',
    amount: 230000,
    paid: 210000,
    paymentId: 50084,
    mode: 'transfer',
    paymentDate: '10/02/2023',
    discount: 20000,
  },
  {
    name: 'JSS 2 Second Term Fee',
    code: 'js2002',
    dueDate: '04/10/2023',
    status: 'paid',
    amount: 170000,
    paid: 170000,
    paymentId: 14587,
    mode: 'pos',
    paymentDate: '10/02/2023',
    discount: 15000,
  },
  {
    name: 'Uniform',
    code: 'uni265',
    dueDate: '04/10/2023',
    status: 'pending',
    amount: 5200,
    paid: 0,
    paymentId: 0,
    mode: '',
    paymentDate: '10/02/2023',
    discount: 0,
  },
];

@Component({
  selector: 'app-student-fees',
  templateUrl: './student-fees.component.html',
  styleUrls: ['./student-fees.component.css'],
})
export class StudentFeesComponent {
  fees = FEES;
}
