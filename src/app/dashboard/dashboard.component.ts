import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  output: any;
  constructor(private service: AccountService) {

  }

  data: any;
  accountDetails = {
    "accountNumber": Number,
    "balance": 0,
    "transactions": [],
    "id": sessionStorage.getItem("id")
  }

  accountNumberGeneration() {
    let x = Math.floor((Math.random() * 100000000000) + 1);
    return x;
  }

  create_account() {
    this.data = {
      "accountNumber": this.accountNumberGeneration(),
      "balance": 0,
      "transactions": [],
      "id": sessionStorage.getItem("id")
    }
    let response = this.service.addingAccount(this.data);
    response.subscribe((res: any) => this.output = res);

  }
}
