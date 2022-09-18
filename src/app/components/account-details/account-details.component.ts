import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  @Input() balance: number = 0;
  @Input() withdraw: number = 0;
  @Input() deposit: number = 0;
  @Input() transfer: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
