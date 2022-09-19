import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
      if (this.amount === 0) {
        this.isError = true;
        return;
      }
      this.result = this.amount + this.balance;
      this.balance += this.amount;
      this.deposit += this.amount;
    } else if (this.transaction === 'Withdraw') {
      if (this.amount >= this.balance) {
        this.isError = true;
        return;
      }
      if (this.amount === 0) {
        this.isError = true;
        return;
      }
      this.result = this.balance - this.amount;
      this.balance -= this.amount;
      this.withdraw += this.amount;
    } else if (this.transaction === 'Transfer') {
      if (this.amount >= this.balance) {
        this.isError = true;
      }
      if (this.amount === 0) {
        this.isError = true;
        return;
      }
      this.result = this.balance - this.amount;
      this.balance -= this.amount;
      this.transfer += this.amount;
    } else {
      this.balance;
      this.result;
    }
    this.resetForms();
  }

  resetForms() {
    this.amount = 0;
  }
}
