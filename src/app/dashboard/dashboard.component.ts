import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  output: any;
  users:any;
  data: any;
  user_id = sessionStorage.getItem("id");
  constructor(private accountservice: AccountService,private userservice:UserService) {}
  ngOnInit() {
    let resp = this.userservice.getUserByid(this.user_id);
    resp.subscribe((data) => { this.users = data });
  }

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
    let response = this.accountservice.addingAccount(this.data);
    response.subscribe((res: any) => this.output = res);
  }
}
