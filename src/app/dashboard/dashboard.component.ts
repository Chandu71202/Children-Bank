import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { UserService } from '../user.service';
import { account } from '../account';
import { DepositComponent } from '../deposit/deposit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WithdrawpopComponent } from '../withdrawpop/withdrawpop.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  output: any;
  users: any;
  data: account = new account(this.accountNumberGeneration(), 0, [], sessionStorage.getItem("id") || "")
  accountDetails: any;
  user_id = sessionStorage.getItem("id");
  Approval_Status:boolean | undefined;
  constructor(private accountservice: AccountService, private userservice: UserService,private dialog:MatDialog) { }
  ngOnInit() {
    let resp = this.userservice.getUserByid(this.user_id);
    resp.subscribe((res) => { this.users = res ;this.Approval_Status = this.users.isApproved;});
  }
  accountNumberGeneration() {
    let x = Math.floor((Math.random() * 100000000000) + 1);
    return x;
  }
  openDeposit(): void {
    const dialogRef = this.dialog.open(DepositComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Deposit:', result);
      }
    });
  }
  create_account() {
    let response = this.accountservice.addingAccount(this.data);
    response.subscribe((res: any) => this.output = res);
  }
  openWithdraw(){
    const dialogRef = this.dialog.open(WithdrawpopComponent, {
      width: '400px',
      data: {  },
    });
  }
}










