import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { UserService } from '../user.service';
import { account } from '../account';
import { DepositComponent } from '../deposit/deposit.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WithdrawpopComponent } from '../withdrawpop/withdrawpop.component';
import { TransferComponent } from '../transfer/transfer.component';
import { ViewstatementsComponent } from '../viewstatements/viewstatements.component';
import { CheckBalanceComponent } from '../check-balance/check-balance.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  output: any;
  users: any;
  data: account = new account(
    this.accountNumberGeneration(),
    0,
    [],
    sessionStorage.getItem('id') || '',
  );
  accountDetails: any;
  user_id = sessionStorage.getItem('id');
  Approval_Status: boolean | undefined;
  has_Account: boolean = true;
  fetched_acc: any | undefined;

  constructor(
    private accountservice: AccountService,
    private userservice: UserService,
    private dialog: MatDialog,
    private http: HttpClient,
  ) {}
  ngOnInit() {
    // check the approval status of the currently logged in user
    let resp = this.userservice.getUserByid(this.user_id);
    resp.subscribe((res) => {
      this.users = res;
      this.Approval_Status = this.users.isApproved;
    });

    // Checking whether the currently logged in user has an account or not
    let resp2 = this.accountservice.getAllAccounts();
    resp2.subscribe((user_account_data) => {
      this.fetched_acc = user_account_data.valueOf();
      console.log(this.fetched_acc);
      for (let i = 0; i < this.fetched_acc.length; i++) {
        if (this.fetched_acc[i].id == this.user_id) {
          this.has_Account = false;
          break;
        }
      }
    });
  }

  // This generates random account numbers
  accountNumberGeneration() {
    let x = Math.floor(Math.random() * 100000000000 + 1);
    return x;
  }
  openDeposit(): void {
    const dialogRef = this.dialog.open(DepositComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Deposit:', result);
      }
    });
  }

  // create account handler
  create_account() {
    let response = this.accountservice.addingAccount(this.data);
    response.subscribe((res: any) => (this.output = res));
  }

  // Opening withdraw popup
  openWithdraw() {
    const dialogRef = this.dialog.open(WithdrawpopComponent, {
      width: '400px',
      data: {},
    });
  }

  // Open transfer popup
  openTransfer() {
    this.dialog.open(TransferComponent, {
      width: '50%',
    });
  }

  // Open View Statements popup
  openviewstatements() {
    this.dialog.open(ViewstatementsComponent, {
      width: '50%',
    });
  }

  // Open Check balance popup
  checkBalance() {
    this.accountservice.getAccount(this.user_id).subscribe((data) => {
      const balanceData = data.balance;
      const dialogRef = this.dialog.open(CheckBalanceComponent, {
        width: '400px',
        data: { balance: balanceData },
      });
    });
  }
}
