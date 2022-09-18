import { Component, OnInit } from '@angular/core';
import { ATM } from 'src/app/atm';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  balance: number = 0;
  withdraw: number = 0;
  deposit: number = 0;
  transfer: number = 0;
  amount: ATM['amount'] = 0;
  transaction: ATM['transaction'] = 'Balance Inquiry';
  result: number = 0;
  isError: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.transaction === 'Balance Inquiry') {
      alert((this.result = this.balance));
    } else if (this.transaction === 'Deposit') {
      this.result = this.amount + this.balance;
      this.balance += this.amount;
      this.deposit += this.amount;
    } else if (this.transaction === 'Withdraw') {
      this.checkAmount();
      this.result = this.balance - this.amount;
      this.balance -= this.amount;
      this.withdraw += this.amount;
    } else if (this.transaction === 'Transfer') {
      this.checkAmount();
      this.result = this.balance - this.amount;
      this.balance -= this.amount;
      this.transfer += this.amount;
    } else {
      this.balance;
      this.result;
    }
  }

  checkAmount(): any {
    if (this.balance < this.amount) {
      this.isError = true;
      return false;
    }
  }
}
